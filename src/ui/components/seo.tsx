import Head from "next/head";

interface Props {
    title : string;
    description : string
  }
  
  export const Seo = ({ title, description}: Props) => {
    return (
        <Head> 
        <title>Vbs converter</title>
        <meta name="description" content={description}/>
        <meta name="viewport" content="with=device-width, initial-scale=1"/>
        <link rel="stylesheet" href="/favicon.ico" />
    </Head>   )   
  };
  