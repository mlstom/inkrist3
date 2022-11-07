import sanityClient from '@sanity/client';


export const client = sanityClient({
  projectId: 'ggguygop',
  dataset: 'production',
  apiVersion: '2022-03-10',
  useCdn: false,
  token: "skECCea14dLA8qj6OuAgVmqVu60acEis0tPj4hJ7b2HbHZFiiKioOuiAG5ZWB9ycz6bSw2799qYk1xc9LDL5mq8DnPM8qoY5DlCECrwfhNOIIl9jUAmI2xsB7l8Xc6SlfSVRjgjgeREdGON0aQx2grFQLrdbB8HO97YTaObm2RgydUQJhQK0",
  ignoreBrowserTokenWarning: true
});
