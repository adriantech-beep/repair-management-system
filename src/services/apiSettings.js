import supabase, { supabaseUrl } from "./supabase";

export async function getSettings() {
  const { data, error } = await supabase
    .from("company_settings")
    .select("*")
    .single();

  if (error) {
    console.error(error);
    throw new Error("Settings could not be loaded");
  }
  return data;
}

export async function createEditSettings(newSettings, id) {
  const hasImagePath = newSettings.company_logo?.startsWith?.(supabaseUrl);

  const imageName = `${Math.random()}-${
    newSettings.company_logo.name
  }`.replaceAll("/", "");

  const imagePath = hasImagePath
    ? newSettings.company_logo
    : `${supabaseUrl}/storage/v1/object/public/company-logo/${imageName}`;

  // 1. Create/Edit
  let query = supabase.from("company_settings");

  // A. CREATE
  if (!id) query = query.insert([{ ...newSettings, company_logo: imagePath }]);

  // B. EDIT
  if (id)
    query = query
      .update({ ...newSettings, company_logo: imagePath })
      .eq("id", id)
      .select();

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Company settings could not be created");
  }

  // 2. Upload image
  if (hasImagePath) return data;
  const { error: storageError } = await supabase.storage
    .from("company-logo")
    .upload(imageName, newSettings.company_logo);

  // 3.Delete the settings IF there is an error uploading  image
  if (storageError) {
    await supabase.from("company_settings").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error(
      "Company settings could not be uploaded and the logo could not be created"
    );
  }

  return data;
}

export async function deleteSettings(id) {
  const { data, error } = await supabase
    .from("company_settings")
    .delete()
    .eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Settings could not be loaded");
  }

  return data;
}
