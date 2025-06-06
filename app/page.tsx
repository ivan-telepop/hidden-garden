import Image from "next/image";
import { socialLinks } from "./config";
import VideoYoutube from "./components/videocom";
import Link from "next/link";

export default function Page() {

  return (
    <section>

<div className="flex flex-col justify-start p-0 ">
  <Image
          src="party9.jpg"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={380}
          height={280}
          priority
        />
</div>
      

  <div className="prose prose-neutral dark:prose-invert ">

  <p>Welcome to Shady Garden — a cozy restaurant nestled in a green urban oasis. We offer seasonal signature cuisine, rich coffee, and a peaceful atmosphere under trees and soft lights. Whether you're planning a romantic dinner, a friendly gathering, or a quiet breakfast, Shady Garden is the perfect escape to relax and enjoy exceptional flavors.</p>
 <hr/>
 <h4>Demo web site - created & developed by ewanG808 </h4>

<p className="text-sm">Contact [ +995 557 991 664 ] Ewan</p>
<hr/>
        <p>
          Contact me:  
            <a href="https://t.me/ewanG808">Telegram.</a> <br/>

        </p>
    
        <p>
          Building sites bots and back end systems for businesses{" "}
          <a href="https://ivanistereotekk.github.io/">РЕЗЮМЕ</a>.
        </p>
  </div>
    </section>
  );
}
