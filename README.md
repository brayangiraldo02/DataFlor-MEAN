Steps for the running of the web application:

1. npm install

  Do this step both in the Back and Front folders.

2. Create the file "cloudinary.js" in the controller folder that is in the app folder of the Back folder and fill this necessary data:

  import cloudinary from 'cloudinary';

  cloudinary.config({ 
    cloud_name: '', 
    api_key: '', 
    api_secret: '' 
  });

  export default cloudinary;