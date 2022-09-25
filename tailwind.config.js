/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors:{
        yellowOrange: "#F3603C",
        blueColor: "#242D52",
        footerBg: "#1D1E25",
        body: " #F2F2F2",
        cardBg:" #FFF0EC",
        colorCarusel:" #fafafa"
      },
        backgroundImage:{
        "overlayGradent":" linear-gradient(180deg, rgba(0, 0, 0, 0.0001) 0.33%, rgba(0, 0, 0, 0.599049) 99.79%);"
      },
      fontFamily:{
        mainFont:"Be Vietnam Pro"
      },
      boxShadow:{
        btnshadow:" 0px 15px 15px -10px #FF9F8E"
      },
      fontSize:{
        heroFontsize:" 40px",
        heroFont:"56px",
        footerSize:"13px"
      },
      width :{
        imgSize:"540px",
        heroText:"500px",
        card:"385px"
      },
      objectPosition:{
        centerCard:"50%"
      },
      backgroundPosition: {
        calc: 'calc(50% + 200px) calc(50% - 1250px)',
        calcBIg: 'calc(50% + 480px) calc(50% - 950px)',
        calcCard: 'calc(50% - 700px) calc(50% + 150px)',
        calcBIgCard: 'calc(50% - 480px) calc(50% + 150px)',
        calcBIgCardXl: 'calc(50% - 800px) calc(50% + 100px)',
      },
      backgroundSize: {
        'mainBg-size': '606px',
        'mainBg-sizeBig': '906px',
        'mainBgCard-size': '606px',
        'mainBgCard-sizeBig': '700px',
      },
    }
  },
  plugins: [],
}
