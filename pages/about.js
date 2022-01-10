import Head from 'next/head'

const About = () => {
  return ( 
    //Below is a fragment just surrounding everything in one element
    <>  
    <Head>
      <title>Home | Sam Donaghy-Bell</title>
      <meta name="keywords" content="About" />
      <meta name="description" content="Hello this is a test description for the About page" />
    </Head>
    <div>
      <h1 className="text-3xl mb-12">About</h1>
      <p>lorem ipsum lorem ipsum lorem ipsumorem ipsum lorem ipsum lorem ipsumorem ipsum lorem ipsum lorem ipsumorem ipsum lorem ipsum lorem ipsumorem ipsum lorem ipsum lorem ipsumorem ipsum lorem ipsum lorem ipsumorem ipsum lorem ipsum lorem ipsumorem ipsum lorem ipsum lorem ipsum</p>
    </div>
    </>
  );
}

export default About;