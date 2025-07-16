import Image from "next/image";
import Link from "next/link";

export default function Page() {

  return (
    <section>

<div className="flex flex-col justify-start p-0 ">
  <Image
          src="/images/party9.jpg"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={380}
          height={280}
          priority
          
        />
</div>      
  <div className="prose prose-neutral dark:prose-invert ">
   {/* <pre> <h4>D E M O   P U R P O S E   W E B   S I T E </h4> </pre> */}

  <p>Welcome to Hidden Garden — This is Demonstration purpose web. 
    Возможно вам понравится этот стиль, прошу жать на линки и контактировать со мной.
    Уверен я смогу вам помочь придумать что то стоющее для вашего бизнеса, или идеи.
    Мои контакты вы можете найти на этой странице !</p>
 <hr/>
    <pre className="prose prose-neutral dark:prose-invert ">
      
         <p className="text-sm">Phone [ +995 557 991 664 ] </p>
         <p>
          Telegram:   
            <Link href="https://t.me/ewanG808" className=" p-1 no-underline bg-cyan-400 dark:bg-sky-600">@ewanG808</Link> <br/>
        </p>
    </pre>

    <pre className="prose prose-neutral dark:prose-invert ">
          <p>
          Web Sites & AI systems for businesses:{" "}
          <Link href="https://ivan-telepop.github.io/">portfolio</Link>.
        </p>
    </pre>
    <hr/>
    <pre className="prose prose-neutral dark:prose-invert ">
          <p> Photo by{" "}
            <Link className="no-underline text-sm" href="https://t.me/Alex_Parshinn ">Alex Parshinn [ +995574152401 ]</Link>
          </p>
      </pre>
        
  </div>
  </section>
  );
}
