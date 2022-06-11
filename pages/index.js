import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Layout2 from '../lib/layout2'
import styles2 from '../styles/Layout.module.scss'
export default function Home() {
  return (
    <>
    <Head>
      <title>AstroMania</title>
    </Head>
    <main className={styles.main}>
      <Layout2/>
      <section>
        <img src="image/background/IMG_7945.PNG" style={{zIndex:0}}/>
        <img src="image/background/web_2_ans_border_png_2.png" style={{zIndex:1}}/>
        <img src="image/background/web_2_ans_border_png_1.png" style={{zIndex:2}}/>

      </section>

      <img src="general/IMG_7949(3).png" id = "logo" style={{width:"6%", height:"7%", position:"absolute", top:"20px", left: "20px", zIndex:6}}/>

      <img src="general/IMG_7949(3).png" id = "title" style={{width:"50%", height: "55%", position:"absolute", top:"200px", left:"500px", zIndex:6}}/>

      <img src="general/IMG_7950.png" style={{height: "40%", width: "35%", position:"absolute", top:"100px", right: "30px", zIndex:6}}/>

      <img src="general/IMG_7951.png" style={{height: "40%", width: "35%", position:"absolute", top:"1760px", left:"20px", zIndex:6}}/>
      
      <img src="general/IMG_7954.png" style={{height: "105%", width: "95%", position:"absolute", top:"1600px", right: "180px", zIndex: 1}}/>

      <img src="general/IMG_7952.png" id = 'green' style={{height: "20%", width: "20%", position:"absolute", top:"2000px", left: "22px", zIndex: 5}}/>

      <img src="general/IMG_7955.png" id = 'planet' style={{height: "28%", width: "25%", position:"absolute", top:"1100px", right: "1px", zIndex: 6}}/>

        <iframe frameBorder= "0" src="https://itch.io/embed-upload/5553814?color=333333" allowFullScreen="" width="1280" height="720" style ={{position:"absolute", width: "65%", height: "78%", zIndex: 6,top: "940px", left: "340px", paddingleft: "0", paddingright:"0"}}>
          <a href="https://zinzin-101.itch.io/interact-astromania">Play AstroMania on itch.io</a>
          </iframe> 

    </main>


    </>
  );

}