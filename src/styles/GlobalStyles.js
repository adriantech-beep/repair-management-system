import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
/*
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
  rel="stylesheet"
/>
<link
  href="https://fonts.googleapis.com/css2?family=Sono:wght@400;500;600&display=swap"
  rel="stylesheet"
/>
*/



:root {

  &, &.default-light{
      /* Indigo */
  --color-brand-50: #eef2ff;
  --color-brand-100: #e0e7ff;
  --color-brand-200: #c7d2fe;
  --color-brand-500: #6366f1;
  --color-brand-600: #4f46e5;
  --color-brand-700: #4338ca;
  --color-brand-800: #3730a3;
  --color-brand-900: #312e81;

  /* Grey */
  --color-grey-0: #fff;
  --color-grey-50: #f9fafb;
  --color-grey-100: #f3f4f6;
  --color-grey-200: #e5e7eb;
  --color-grey-300: #d1d5db;
  --color-grey-400: #9ca3af;
  --color-grey-500: #6b7280;
  --color-grey-600: #4b5563;
  --color-grey-700: #374151;
  --color-grey-800: #1f2937;
  --color-grey-900: #111827;

  --color-blue-100: #e0f2fe;
  --color-blue-700: #0369a1;
  --color-green-100: #dcfce7;
 

  --color-yellow-100: #fef9c3;
  --color-yellow-700: #a16207;
  --color-silver-100: #e5e7eb;
  --color-silver-700: #374151;
  --color-indigo-100: #e0e7ff;
  --color-indigo-700: #4338ca;

  --color-red-100: #fee2e2;
  --color-red-600:rgb(224, 18, 18);
  --color-red-700:rgb(202, 29, 29);
  --color-red-800:rgb(173, 22, 22);

  --backdrop-color: rgba(255, 255, 255, 0.1);

  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);

  --border-radius-tiny: 3px;
  --border-radius-sm: 5px;
  --border-radius-md: 7px;
  --border-radius-lg: 9px;


 

  /* For dark mode */
  --image-grayscale: 0;
  --image-opacity: 100%;


    
  }


  &.default-dark{
    /* FOR DARK MODE */

--color-grey-0:rgb(15, 19, 24);
--color-grey-50:rgb(15, 20, 32);
--color-grey-100:rgb(17, 20, 24);
--color-grey-200: #374151;
--color-grey-300: #4b5563;
--color-grey-400: #6b7280;
--color-grey-500: #9ca3af;
--color-grey-600: #d1d5db;
--color-grey-700: #e5e7eb;
--color-grey-800: #f3f4f6;
--color-grey-900: #f9fafb;

--color-blue-100:rgb(10, 17, 21);
--color-blue-700: #e0f2fe;
--color-yellow-100: #854d0e;
--color-yellow-700: #fef9c3;
--color-silver-100: #374151;
--color-silver-700:rgb(217, 220, 226);
--color-indigo-100:rgb(23, 22, 34);
--color-indigo-700: #e0e7ff;

--color-red-100: #f5a5a5;
--color-red-700: #e65151;
--color-red-800: #c44141;

--backdrop-color: rgba(0, 0, 0, 0.3);

--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
--shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.3);
--shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);

--image-grayscale: 10%;
--image-opacity: 90%;

  }

  &.Orange-light{

--color-brand-50: #fff7e5; 
--color-brand-100: #ffebc8; 
--color-brand-200: #ffd08e; 
--color-brand-500: #ff9800; 
--color-brand-600: #e67e22;
--color-brand-700: #d35400; 
--color-brand-800: #a04000; 
--color-brand-900: #732d00; 

--color-grey-0: #ffffff;
--color-grey-50: #fcfcfc;
--color-grey-100: #f6f6f6;
--color-grey-200: #ebe8e1;
--color-grey-300: #ddd8cb;
--color-grey-400: #cabbac;
--color-grey-500:rgb(150, 137, 121);
--color-grey-600:rgb(101, 95, 87);
--color-grey-700:rgb(69, 65, 59);
--color-grey-800:rgb(82, 74, 62);
--color-grey-900: #453b2e;  

--color-blue-100: #67b5f6; 
--color-blue-700: #004b85;  
--color-yellow-100: #ffdb83; 
--color-yellow-700: #c09220; 
--color-silver-100: #a9adb2; 
--color-silver-700: #50565c; 
--color-indigo-100: #b89eff;
--color-indigo-700: #5631a6; 

--color-red-100: #f5a5a5;
--color-red-700: #e65151;
--color-red-800: #c44141;

--backdrop-color: rgba(0, 0, 0, 0.3);

--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
--shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.3);
--shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);

--image-grayscale: 10%;
--image-opacity: 90%;

  }

  &.Orange-dark{

--color-brand-50: #2a1a10; 
--color-brand-100: #3b2214; 
--color-brand-200: #523018;
--color-brand-500: #7f4a20; 
--color-brand-600: #995820; 
--color-brand-700: #b46a26;
--color-brand-800: #d0802d; 
--color-brand-900: #e89b50; 

--color-grey-0: #000000; 
--color-grey-50: #1a1410; 
--color-grey-100: #241b14; 
--color-grey-200: #38271e; 
--color-grey-300: #4c3628; 
--color-grey-400: #624534; 
--color-grey-500: #7d5a44;
--color-grey-600: #977253; 
--color-grey-700: #b48f6b; 
--color-grey-800: #d0aa85; 
--color-grey-900: #eac2a0; 

--color-blue-100: #67b5f6; 
--color-blue-700: #004b85;  
--color-yellow-100: #ffdb83; 
--color-yellow-700: #c09220; 
--color-silver-100: #a9adb2; 
--color-silver-700: #50565c; 
--color-indigo-100: #b89eff;
--color-indigo-700: #5631a6; 

--color-red-100: #f5a5a5;
--color-red-700: #e65151;
--color-red-800: #c44141;

--backdrop-color: rgba(0, 0, 0, 0.3);

--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
--shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.3);
--shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);

--image-grayscale: 10%;
--image-opacity: 90%;
}

&.Green-light{

--color-brand-50: #f3faed; 
--color-brand-100: #e1f4d4; 
--color-brand-200: #c3e9ab; 
--color-brand-500: #8ccf71; 
--color-brand-600: #6eb052; 
--color-brand-700: #538b3d; 
--color-brand-800: #3f6c2e;
--color-brand-900: #2d5020; 


--color-grey-0: #ffffff;
--color-grey-50: #fcfcfc;
--color-grey-100: #f6f6f6;
--color-grey-200: #ebe8e1;
--color-grey-300: #ddd8cb;
--color-grey-400: #cabbac;
--color-grey-500:rgb(150, 137, 121);
--color-grey-600:rgb(101, 95, 87);
--color-grey-700:rgb(69, 65, 59);
--color-grey-800:rgb(82, 74, 62);
--color-grey-900: #453b2e;  

--color-blue-100: #99caff;
--color-blue-700: #0055a4;
--color-yellow-100: #ffdd99;
--color-yellow-700: #b8860b;
--color-silver-100: #aeb2b7;
--color-silver-700: #676d75;
--color-indigo-100:#af9eff;
--color-indigo-700: #5a3fcf;

--color-red-100: #f5a5a5;
--color-red-700: #e65151;
--color-red-800: #c44141;

--backdrop-color: rgba(0, 0, 0, 0.3);

--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
--shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.3);
--shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);

--image-grayscale: 10%;
--image-opacity: 90%;

  }

  &.Green-dark{

--color-brand-50: #1a291a; 
--color-brand-100: #223922; 
--color-brand-200: #2e4a2e; 
--color-brand-500: #4f784f; 
--color-brand-600: #68925b; 
--color-brand-700: #85ab6e;
--color-brand-800: #a1c286; 
--color-brand-900: #bdda9f; 

--color-grey-0: #000000; 
--color-grey-50: #131712; 
--color-grey-100: #1f251b; 
--color-grey-200: #2d3425; 
--color-grey-300: #3b4532; 
--color-grey-400: #4e5b42; 
--color-grey-500: #657954; 
--color-grey-600: #80956d; 
--color-grey-700: #9fb687; 
--color-grey-800: #bbcfa1; 
--color-grey-900: #d5e9bc; 

--color-blue-100: #99caff;
--color-blue-700: #0055a4;
--color-yellow-100: #ffdd99;
--color-yellow-700: #b8860b;
--color-silver-100: #aeb2b7;
--color-silver-700: #676d75;
--color-indigo-100:#af9eff;
--color-indigo-700: #5a3fcf;

--color-red-100: #f5a5a5;
--color-red-700: #e65151;
--color-red-800: #c44141;

--backdrop-color: rgba(0, 0, 0, 0.3);

--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
--shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.3);
--shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);

--image-grayscale: 10%;
--image-opacity: 90%;


}

 &.Red-light{

--color-brand-50: #fff5f5; 
--color-brand-100: #ffe3e3; 
--color-brand-200: #ffcccc; 
--color-brand-500: #ff6b6b; 
--color-brand-600: #e63946; 
--color-brand-700: #c92a2a; 
--color-brand-800: #9b2222; 
--color-brand-900: #661616; 

--color-grey-0: #ffffff;
--color-grey-50: #fcfcfc;
--color-grey-100: #f6f6f6;
--color-grey-200: #ebe8e1;
--color-grey-300: #ddd8cb;
--color-grey-400: #cabbac;
--color-grey-500:rgb(150, 137, 121);
--color-grey-600:rgb(101, 95, 87);
--color-grey-700:rgb(69, 65, 59);
--color-grey-800:rgb(82, 74, 62);
--color-grey-900: #453b2e;  




--color-blue-100: #99caff;
--color-blue-700: #0055a4;
--color-yellow-100: #ffdd99;
--color-yellow-700: #b8860b;
--color-silver-100: #aeb2b7;
--color-silver-700: #676d75;
--color-indigo-100:#af9eff;
--color-indigo-700: #5a3fcf;

--color-red-100: #f5a5a5;
--color-red-700: #e65151;
--color-red-800: #c44141;

--backdrop-color: rgba(0, 0, 0, 0.3);

--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
--shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.3);
--shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);

--image-grayscale: 10%;
--image-opacity: 90%;

  }
  &.Red-dark{

--color-brand-50: #2a1616; 
--color-brand-100: #3b1a1a; 
--color-brand-200: #532020; 
--color-brand-500: #832626; 
--color-brand-600: #a23030; 
--color-brand-700: #c43a3a; 
--color-brand-800: #e15252; 
--color-brand-900: #ff6b6b; 

--color-grey-0: #000000; 
--color-grey-50: #1a1414; 
--color-grey-100: #241a1a; 
--color-grey-200: #382525; 
--color-grey-300: #4c3232;
--color-grey-400: #624040; 
--color-grey-500: #7d5151; 
--color-grey-600: #976363; 
--color-grey-700: #b47a7a; 
--color-grey-800: #d09797; 
--color-grey-900: #eababa;  

--color-blue-100: #99caff;
--color-blue-700: #0055a4;
--color-yellow-100: #ffdd99;
--color-yellow-700: #b8860b;
--color-silver-100: #aeb2b7;
--color-silver-700: #676d75;
--color-indigo-100:#af9eff;
--color-indigo-700: #5a3fcf;

--color-red-100: #f5a5a5;
--color-red-700: #e65151;
--color-red-800: #c44141;

--backdrop-color: rgba(0, 0, 0, 0.3);

--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
--shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.3);
--shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);

--image-grayscale: 10%;
--image-opacity: 90%;

  }

      &.Yellow-light{

--color-brand-50: #fff9db;
--color-brand-100: #fff3b0; 
--color-brand-200: #ffea83; 
--color-brand-500: #ffd60a; 
--color-brand-600: #e6b800;
--color-brand-700: #c49500;
--color-brand-800: #a17500; 
--color-brand-900: #7f5700; 

--color-grey-0: #ffffff;
--color-grey-50: #fcfcfc;
--color-grey-100: #f6f6f6;
--color-grey-200: #ebe8e1;
--color-grey-300: #ddd8cb;
--color-grey-400: #cabbac;
--color-grey-500:rgb(150, 137, 121);
--color-grey-600:rgb(101, 95, 87);
--color-grey-700:rgb(69, 65, 59);
--color-grey-800:rgb(82, 74, 62);
--color-grey-900: #453b2e;  

--color-blue-100: #99caff;
--color-blue-700: #0055a4;
--color-yellow-100: #ffdd99;
--color-yellow-700: #b8860b;
--color-silver-100: #aeb2b7;
--color-silver-700: #676d75;
--color-indigo-100:#af9eff;
--color-indigo-700: #5a3fcf;

--color-red-100: #f5a5a5;
--color-red-700: #e65151;
--color-red-800: #c44141;


--backdrop-color: rgba(0, 0, 0, 0.3);

--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
--shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.3);
--shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);

--image-grayscale: 10%;
--image-opacity: 90%;

  }

      &.Yellow-dark{

--color-brand-50: #2d2b22; 
--color-brand-100: #3a371e;
--color-brand-200: #52461f; 
--color-brand-500: #8c6d1f; 
--color-brand-600: #aa891f; 
--color-brand-700: #c4a52a;
--color-brand-800: #e0c04d; 
--color-brand-900: #f8dc7f; 

--color-grey-0: #ffffff;
--color-grey-50: #fcfcfc;
--color-grey-100: #f6f6f6;
--color-grey-200: #ebe8e1;
--color-grey-300: #ddd8cb;
--color-grey-400: #cabbac;
--color-grey-500: #af9f8c;
--color-grey-600: #8e816e;
--color-grey-700: #726656;
--color-grey-800: #5a4f40;
--color-grey-900: #453b2e;

--color-blue-100: #99caff;
--color-blue-700: #0055a4;
--color-yellow-100: #ffdd99;
--color-yellow-700: #b8860b;
--color-silver-100: #aeb2b7;
--color-silver-700: #676d75;
--color-indigo-100:#af9eff;
--color-indigo-700: #5a3fcf;

--color-red-100: #fcb5b5;
--color-red-700: #ffb3b3;
--color-red-800: #8c1a1a;

--backdrop-color: rgba(0, 0, 0, 0.3);

--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
--shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.3);
--shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);

--image-grayscale: 10%;
--image-opacity: 90%;

  }

}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  /* Creating animations for dark mode */
  transition: background-color 0.3s, border 0.3s;
}

html {
  font-size: 62.5%;
}

body {
  font-family: "Poppins", sans-serif;
  color: var(--color-grey-700);

  transition: color 0.3s, background-color 0.3s;
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-grey-200);
  color: var(--color-grey-500);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-greeen-600);
  outline-offset: -1px;
}

/* Parent selector, finally 😃 */
button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;

  /* For dark mode */
  filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
}




`;

export default GlobalStyles;

/*

  

 
}

*/
