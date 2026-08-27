
import { FadeIn } from "../ui/FadeIn";
import { useState } from "react";
import { X } from "lucide-react";

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      url: "https://scontent.fixj1-3.fna.fbcdn.net/v/t39.30808-6/489869104_122124329420773183_645440325634950043_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Tvi1LQ9yS_YQ7kNvwHi3c3L&_nc_oc=AdkRzuDMGwBEDN-zS3pujJ3dOQsQXnzZ85srO45uGx9FDVftP-tnvy9cAm76onsQb9OyN1Hf-0_Aw3HtGh_mu4Fq&_nc_zt=23&_nc_ht=scontent.fixj1-3.fna&_nc_gid=pAVbrL4s_5PoyWipFDL5gA&oh=00_AfISbkzvmR-0qAs6Qy9-aVLCkaLhHBU135Ja5nhI9_3jBA&oe=682CF84F",
      caption: "Students during indoor learning activities",
    },
    {
      url: "https://scontent.fixj1-2.fna.fbcdn.net/v/t39.30808-6/484900685_122117180450773183_7699973648881314883_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Lawcve9YWDkQ7kNvwEZFZUk&_nc_oc=Adn3r8fCtYOw9W_cRBz8l1r67-fH8dVCMv71cZWDRaV6yyc7DOSnPQCfy9YYXvZvSTtQ2y-zNLLaCu02LiVd9kt7&_nc_zt=23&_nc_ht=scontent.fixj1-2.fna&_nc_gid=hgFE78vzBrzdfIqQkHfw1w&oh=00_AfI-MQjR9C_sjVSIJve0BCvWAaxsde0tm3Fc7ra3vys22A&oe=682CEDFE",
      caption: "Fun drawing and coloring activities",
    },
    {
      url: "https://scontent.fixj1-3.fna.fbcdn.net/v/t39.30808-6/484809648_122117165672773183_8054222387257968569_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=wxDUcrpWynwQ7kNvwHU3DOE&_nc_oc=Adl0VR_ZlomOsn4rv8Dz4qDxzVzOGgp7ANauFnlibHAWE7jqgi3vK1g-sWiSq6VCFJdx7lZ78tgLWiDEP0r7Ms71&_nc_zt=23&_nc_ht=scontent.fixj1-3.fna&_nc_gid=wL0hpmcaRP2bh_jBPUTohA&oh=00_AfKLKgpMwsrvlMOcmMtZy6zROO765iusbd5bCIXYUPpcww&oe=682D038D",
      caption: "Digital Screen Services",
    },
    {
      url: "https://scontent.fixj1-1.fna.fbcdn.net/v/t39.30808-6/484852186_122117180576773183_3245504444725248304_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ohNwpG0KTPMQ7kNvwHcF6KE&_nc_oc=AdlTr5jGsa0RhHcTwOLHhigo5G6_uUwh2lv4nayNhTLvu9DNdpzkTrv2HxdXqRDBHS2lwRc9BZdK8E0YPQ532uG2&_nc_zt=23&_nc_ht=scontent.fixj1-1.fna&_nc_gid=YbqD5ZlNswAf-LZnuCPPug&oh=00_AfKDkWXADm5_hVgw2YBGM47-z7ymEzna7ed5JcJSqwunZA&oe=682CFE1F",
      caption: "Where curiosity meets collaboration",
    },
    {
      url: "https://scontent.fixj1-3.fna.fbcdn.net/v/t39.30808-6/484803487_122116531364773183_7719682903763063138_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=-XKr5raBPC0Q7kNvwG7door&_nc_oc=AdmyrO-wkkgBIbvfWxoDY-xUGrW_oPb_-kP-8txkM8kvqHP0CkLR8_w4fOvM9eCatOAoY5gRwaEY_BsWHrVBqoG2&_nc_zt=23&_nc_ht=scontent.fixj1-3.fna&_nc_gid=GOiBe_IKpmh72c_HfDpG3A&oh=00_AfLJDmgZvJ8XHhiyTFel18HUuSvrtxNjEPHcGfyaN7DP1g&oe=682D1028",
      caption: "Joyful moments together",
    },
    {
      url: "https://scontent.fixj1-3.fna.fbcdn.net/v/t39.30808-6/487462440_122119855430773183_7819509556291436555_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=01cZgDpls0MQ7kNvwHuUhh0&_nc_oc=AdnansH54kqMJA_ltdWcwUIWvitD4hclFf4XKb4DyF79cBaSuOmB3zcYjrMGCPaRU9bDsTB7xWWURq8oeu_kdLGn&_nc_zt=23&_nc_ht=scontent.fixj1-3.fna&_nc_gid=g1lurWEbjaJilm-_yrYwyQ&oh=00_AfI6j19GfDC5HcEVqjMi4zd9GTcZXoF6N3LkZEOihW1m_Q&oe=682DFBD8",
      caption: "Celebrating Together",
    },
     {
      url: "https://scontent.fixj1-3.fna.fbcdn.net/v/t39.30808-6/486577377_122119855358773183_4665266700859587571_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=NamrP191U5AQ7kNvwGHcBEs&_nc_oc=Adn4rYky0tHW3zju7fXRTL6HYmQDH86YmUgvdKcwdGsake3YhhRFrIn91vQkzVQ7r2FOmTZgP4Twej8gYjmrdwN8&_nc_zt=23&_nc_ht=scontent.fixj1-3.fna&_nc_gid=Vldi5C4r5SO6Rd-hzweEKw&oh=00_AfLwiCv4NP8NML93ArdtLhjhRHxR8kd-kBymp8nXKyHYEA&oe=682E04A8",
      caption: "Guided and celebrated together",
    },
    {
      url: "https://scontent.fixj1-2.fna.fbcdn.net/v/t39.30808-6/484207721_122115615416773183_8819480940238434709_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=sABlNtqj6KsQ7kNvwEhon7a&_nc_oc=Adn5_Cg6f0Iivt39kPH-nXF2dPhJYaYeoVU7bVK_MDKpEhOmhizxuMA2sSG5uEwmscVkJcUnFqw2tn25ot7ehcA7&_nc_zt=23&_nc_ht=scontent.fixj1-2.fna&_nc_gid=8qAJkMlhzbTv3lwczgXzPA&oh=00_AfKFCQsZ8s_ifC3Y6DAgemKEftdDRnI6x0grrLHSRdAFug&oe=682E07EE",
      caption: "Digital Learning",
    },
    {
      url: "https://scontent.fixj1-2.fna.fbcdn.net/v/t39.30808-6/484095025_122115575546773183_8851127728909825616_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=D-gYd_JQfjkQ7kNvwGvt6QD&_nc_oc=AdmA6EmF5Nw8ZrkflJ-NMKcV0a2CQORPxiztBXsPz5m2Wyb0vQ5Cn6rO8eMkMg8gm1QaioLMqdC3UtReflSl277T&_nc_zt=23&_nc_ht=scontent.fixj1-2.fna&_nc_gid=HvVPr-FN0dBh1_6jKHMuaw&oh=00_AfJzcA2lgtGfacmptACv64toQ3L1CfeJcMkwwrUfrJfFlA&oe=682DF02D",
      caption: "Bright smiles, brighter future",
    },
    {
      url: "https://scontent.fixj1-2.fna.fbcdn.net/v/t39.30808-6/484589427_122115575498773183_5198015714538517548_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ekqnVsyKOZcQ7kNvwHwN2Xe&_nc_oc=AdljK7oOwAqtLocSpGFNqV-Y5SzbNdMaX5LSAAE_GnW0AIkH-HvLRKUYPn0r_KIkW_GSuj7BreJEGtxKiwFIfR1a&_nc_zt=23&_nc_ht=scontent.fixj1-2.fna&_nc_gid=batagw23rkeazv-1XkIdhg&oh=00_AfJt2a7KvE07-v1GIoPo6mlD-YoJlEukbi8C2GSGyfyciA&oe=682E0E31",
      caption: "Smiling through school days",
    },
     {
      url: "https://scontent.fixj1-1.fna.fbcdn.net/v/t39.30808-6/484392761_122115575444773183_5231472277470391372_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=uaAWwRGCzTIQ7kNvwGbdIy4&_nc_oc=AdkW3r6IoTIZ67bCEKt1bCLZKJmSVywsz9Mv1SSvf6WVzSVgk_XWi13OuhZnE1nyTiONxxX6fRKMBEoi_RKm_gOW&_nc_zt=23&_nc_ht=scontent.fixj1-1.fna&_nc_gid=Azx_We5QZFXoY70qgo8obA&oh=00_AfLYWBRaPe_VTPGdxLMjroux23zcPzMYfL0UP0bMWBsudg&oe=682DF157",
      caption: "Learning at its Peak",
    },
       {
      url: "https://scontent.fixj1-3.fna.fbcdn.net/v/t39.30808-6/484031990_122115614924773183_3914573382432722831_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=hRDBY1yyl3EQ7kNvwHnvy13&_nc_oc=Adm-U5rPQFsL4z70aP5-0wOjhi7uu24DvhYN89IopozGJ2Ekng0edp_bZR4hIKhvpwKGlr8FnsGnlUoKEut_bnWU&_nc_zt=23&_nc_ht=scontent.fixj1-3.fna&_nc_gid=fPH1g8GfgBAZQoFzWPSyIQ&oh=00_AfLdpIsu5zOITJsu4YTnysfm_kDyrcAecOjisjxoEapKcw&oe=682E02D8",
      caption: "Leading with quiet strength",
    },
    {
      url: "https://scontent.fixj1-1.fna.fbcdn.net/v/t39.30808-6/484920238_122117180552773183_8407501056999080289_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=RDPSVADtEqIQ7kNvwG_R7Zh&_nc_oc=AdlwMOpt6UN1oAqoZ_EoBU10fBPqaAnJVByA8iSEtmC2myJarc7ShF1rG0Embnx_Bs9-U5SMso5ewbNrO1BKw2fH&_nc_zt=23&_nc_ht=scontent.fixj1-1.fna&_nc_gid=EIgIbnMBXOrdfMy1CH4xjQ&oh=00_AfKZojXvr1IcdSPUFSm4q6Zv-KA9VIhERm84xpyL1zPYFA&oe=682DF28E",
      caption: "Painting moments with color",
    },
    {
      url: "https://scontent.fixj1-1.fna.fbcdn.net/v/t39.30808-6/489282558_122124150062773183_3160934412085222411_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=hSpIXlfEYvwQ7kNvwHT27_F&_nc_oc=AdmDwrOWY1TesAWq2vVK3l_ugTBkaSC8djKonA7a1sOqGn8u21BZxCWWf50xzC2pbDUEzJtCKZ42c_1drm83_-3s&_nc_zt=23&_nc_ht=scontent.fixj1-1.fna&_nc_gid=fHTbE3RMNu2yqJ62WrYcsw&oh=00_AfI1cl6O7D7rG1wEu1SOHlBMZSN0S8ekWtkYDHCAMFsCDA&oe=682DF73E",
      caption: "Moments of shared pride",
    },
     {
      url: "https://scontent.fixj1-1.fna.fbcdn.net/v/t39.30808-6/489000841_122124329324773183_6622426800675410188_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Hb1-EFk2rIIQ7kNvwFje-gF&_nc_oc=AdlIlVAtoSWpPHNQujDlyjj37TB6Wimln5fzYbNjcMz5bQyL11Rjb5g_cl46m3yjwlah57IOFiL9ZVtsRntkRuXg&_nc_zt=23&_nc_ht=scontent.fixj1-1.fna&_nc_gid=wnZ8devrreHqNJtCE5TgQA&oh=00_AfJhzCsVz93_TvsKM7Ks2jc5sDQP72Onq00JYZJmfVJWDA&oe=682E15E9",
      caption: "Thinking one step ahead",
    },
    {
      url: "https://scontent.fixj1-2.fna.fbcdn.net/v/t39.30808-6/489462928_122124601178773183_3097027417920591820_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=2--nC3EMRxwQ7kNvwEr4fwT&_nc_oc=AdkdiXrnhKCN_ObplDp4T1Xz3FXXpNMm4bjoEwAzljNJmQH0XnOMDw0qJqzUxFXDLPhk-PUrvn3uUUoKZM0QFH56&_nc_zt=23&_nc_ht=scontent.fixj1-2.fna&_nc_gid=N4YXXC0MM3J_j3lS_b72fg&oh=00_AfI8vbtiqwNQbc5Bv2Yg8_PiaOlb6uqqw8bxH29AkFbIlQ&oe=682DFFA0",
      caption: "Science and Fun",
    },
    {
      url: "https://scontent.fixj1-2.fna.fbcdn.net/v/t39.30808-6/489346816_122124359702773183_6640660775693241492_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=8GOD-UMp1EQQ7kNvwGM4e23&_nc_oc=AdlPG4tCEZkqx2NBsYIIS8lxhdzAThlY49akaCahZtyK8hdXOEeDPYC7sPkG5k1NfgdSFgAcIj-3z_KYao7mKiiq&_nc_zt=23&_nc_ht=scontent.fixj1-2.fna&_nc_gid=1jm6VYBns0nOnkwR61gz7w&oh=00_AfJ5gatFrbs4FNyq2cvS60-WbZIddB5S_jDRsGW6acoC4w&oe=682E1767",
      caption: "Strikes, smashes, and smiles!",
    },
    {
      url: "https://scontent.fixj1-3.fna.fbcdn.net/v/t39.30808-6/485355164_122117461238773183_8896212352923075045_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=kBjxAfNihfEQ7kNvwGTdUEN&_nc_oc=Adnqc7UxREdnZAViaot3jIWv3erSbWL35g90WLTATYpGBXLzzqNQHhwRc52T9G00ZU8fNzFEVaqdsuk_QYuwnmmY&_nc_zt=23&_nc_ht=scontent.fixj1-3.fna&_nc_gid=GCafZNja-QGppIBpGBLj-w&oh=00_AfICbJilFiVLThuWKHmFbCf3ng8n1K6igC3q5wVhOUaMDw&oe=682DF3B8",
      caption: "learn and play together",
    },
    {
      url: "https://scontent.fixj1-2.fna.fbcdn.net/v/t39.30808-6/473418366_1785260335569405_4371103735994410747_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=APO_zdxiuEgQ7kNvwGvEIgB&_nc_oc=AdlUAyQMqduCAPcmCuJE3C9XQHDRxAwbE-MXI6ywi7i4xI2HKOLv97FOfhlDE7jWeLaeY5TJSZh6gczwZ9IpWove&_nc_zt=23&_nc_ht=scontent.fixj1-2.fna&_nc_gid=_18Bo9Z-xYOwZAOMCgrUww&oh=00_AfJhqMjcM70fKRROwLwBcB_xdKhxYi-r8afY62PzZILUAQ&oe=682E93A9",
      caption: "Moments of Joy",
    },
    {
      url: "https://scontent.fixj1-3.fna.fbcdn.net/v/t39.30808-6/484571034_122116531454773183_7460296793009315238_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=td9Oqmnz2pUQ7kNvwHL8MXU&_nc_oc=Adne70-oDbCmkIYlDxokoDdJhP2Q9NwlQVTch-va7F2I-WJEDYVRTV4H9xX5VxFVkyCeyPiR2JTvASzvNLfRG67w&_nc_zt=23&_nc_ht=scontent.fixj1-3.fna&_nc_gid=QnzagP1AbZHCQ6xG9_kjgg&oh=00_AfKT_jFSP-Zv0oBnUPTcvIOPoh5zzGVeWfLH8Y7F_P6PVA&oe=682E6983",
      caption: "Fun Time Together",
    },
     
  
  ];

  const openImage = (url: string) => {
    setSelectedImage(url);
    document.body.style.overflow = "hidden";
  };

  const closeImage = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section id="gallery" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <FadeIn>
            <span className="section-subtitle">School Life</span>
            <h2 className="section-title">Our Gallery</h2>
            <p className="max-w-3xl mx-auto text-muted-foreground mt-4">
              Take a glimpse into our vibrant school community, activities, and facilities.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <FadeIn key={index} delay={index * 100} className="h-full">
              <div 
                className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-sm cursor-pointer group"
                onClick={() => openImage(image.url)}
              >
                <img
                  src={image.url}
                  alt={image.caption}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white p-4 text-sm">{image.caption}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={closeImage}>
            <button 
              className="absolute top-4 right-4 text-white p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                closeImage();
              }}
            >
              <X size={24} />
            </button>
            <img 
              src={selectedImage} 
              alt="Enlarged gallery image" 
              className="max-w-full max-h-[90vh] object-contain" 
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </section>
  );
}
