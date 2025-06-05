import Image from "next/image";
import { socialLinks } from "./config";
import VideoYoutube from "./components/videocom";

export default function Page() {

  return (
    <section>
      <a href={socialLinks.twitter} target="_blank">
        <Image
          src="/photos/iv-gon.png"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>

      

      <div className="prose prose-neutral dark:prose-invert">



<br/>
<h1 className="mb-8 text-2xl font-medium tracking-tight">
        Your lovely place
</h1>
<p>Paragraph text</p>



      
      </div>
    </section>
  );
}
