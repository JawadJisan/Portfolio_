import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: process.env.React_App_Sanity_Project_Id ,
    dataset:'production',
    apiVersion:'2022-02-01',
    useCdn: true,
    token: process.env.React_App_Sanity_Token

});
const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);