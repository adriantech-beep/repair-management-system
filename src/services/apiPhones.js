import supabase, { supabaseUrl } from "./supabase";

import { getToday } from "../helpers/getToday";
import { PAGE_SIZE } from "../utilities/constants";

import onError from "../utilities/formError";

export async function getPhones({ filter, sortBy, page }) {
  let query = supabase
                .from("job_orders")
                .select("*, customers(*)", { count: "exact" });

  if (filter) query = query[filter.method || "eq"](filter.field, filter.value);
  if (sortBy) query = query[sortBy.method || "eq"](sortBy.field, sortBy.value);

  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }

  const { data, error, count } = await query;

  if (error) {
    return await onError( error, 'Unable to fetch job order records.')
  }

  return { data, count };
}
export async function createEditPhone(newPhone, id) {
  const hasImagePath =
    typeof newPhone.image === "string" &&
    newPhone.image.startsWith(supabaseUrl);

  let imagePath = newPhone.image;
  let imageName;

  if (!hasImagePath && newPhone.image) {
    imageName = `${Math.random()}-${newPhone.image.name}`.replaceAll("/", "");
    imagePath = `${supabaseUrl}/storage/v1/object/public/phone-images/${imageName}`;
  }

  const payload = { ...newPhone, image: imagePath };
  delete payload.customers;
  delete payload.imageName;

  const query = supabase.from("job_orders");
  let data, error;

  if (!id) {
    ({ data, error } = await query
      .insert([payload])
      .select("*, customers:customer_id(id, name, email, address, phoneNumber)")
      .single());
  } else {
    ({ data, error } = await query
      .update(payload)
      .eq("id", id)
      .select());

    data = result.data;
    error = result.error;
  }

  if (error) throw new Error(error.message);

  if (!hasImagePath && newPhone.image instanceof File) {
    const { error: storageError } = await supabase.storage
      .from("phone-images")
      .upload(imageName, newPhone.image);

    if (storageError) {
      await supabase.from("job_orders").delete().eq("id", data.id);
      throw new Error("Image upload failed. Record deleted.");
    }
  }

  return data;
}

export async function deletePhone(id) {
  const { data, error } = await supabase
    .from("job_orders")
    .delete()
    .eq("id", id)
    .select();

  if (error || data.length === 0) {
    return await onError( error, 'Unable to delete resource.')
  }

  return;
}

export async function getTechnicians(){
  const { data, error } = await supabase
    .from("user_profiles")
    .select();

  if (error || data.length === 0) {
    return await onError( error, 'Unable to fetch list of technicians.')
  }

  return data;
}

export async function getPendingRepairs() {
  const { data, error } = await supabase
    .from("job_orders")
    .select("*")  

  if (error) {
    return await onError( error, 'Unable to fetch pending repair resources.');
  }

  return data;
}

export async function getAssignedRepairs({ filter }) {
  let query = supabase
                .from("job_orders")
                .select("*")
                .not("assignee", "is", null);

  if (filter) query = query[filter.method || "eq"](filter.field, filter.value);
  const { data, error } = await query;

  if (error) {
    return await onError( error, 'Unable to load assigned repairs.');
  }

  return data;
}

export async function getAssigned(id) {
  const { data, error } = await supabase
    .from("job_orders")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    return await onError( error, 'Assigned not found.' );
  }

  return data;
}

export async function getSalesAfterDate(date) {
  const { data, error } = await supabase
    .from("job_orders")
    .select("created_at,cost,success,failed,serviceFee")
    .gte("created_at", date)
    .lte("created_at", getToday({ end: true }));

  if (error) {
    return await onError( error, 'Unable to fetch sales after date.' );
  }

  return data;
}
