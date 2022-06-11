import { School } from '@prisma/client'
import prisma from "../../lib/prisma"
import Head from "next/head";
import styles from "../../styles/School.module.scss"
import Layout from '../../lib/layout';
export async function getStaticPaths(){
  const schools = await prisma.school.findMany({
    select: {name:true}
  }
  )
  const paths = schools.map((school) => {
    return {
      params: { name: school.name },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }){
  const { name } = params;
  const schoolData = await prisma.school.findUnique({
    where:{
      name:name,
    }
  })
  const data = JSON.parse(JSON.stringify(schoolData))
  return {
    props:{
      name: data
    }
  }
}

const Leaderboardschool = ({name}) =>{
  return(
    <>
    <Head>Leaderboard:{name.id}</Head>
    <main className={styles.main}>
      <Layout/>
      <section>
        <div>
          <span>
            <h1></h1>
            </span>
        </div>
      </section>
    </main>
    </>
  )
}

export default Leaderboardschool