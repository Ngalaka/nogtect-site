// import { programmes } from "@/lib/programmes";
// import Image from "next/image";
// import Link from "next/link";
// import { FaRegEnvelope } from "react-icons/fa6";

// export default async function QuestionPage({ params }) {
//   const { id } = await params;

//   const programme = programmes.find((p) => p.id === Number(id));

//   if (!programme) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <h1 className="text-2xl font-bold"> Course not found </h1>
//       </div>
//     );
//   }

//   return (
//     <div className="w-full h-auto py-12">
//            <div className="w-[90%] h-auto px-4 mx-auto space-y-2 ">
//             <div className="w-15 h-15 rounded-full bg-blue-950 flex justify-center items-center">
//               <span className="text-center"><FaRegEnvelope size={30} className="text-white"/></span>
//            </div>

//            <div className="space-y-2">
//                  <h1 className="font-bold text-xl text-red-800">Free programme guide</h1>
//                  <p className="w-180 h-auto font-bold text-4xl ">Receive the <span className="text-red-800">{programme.name}</span>  curriculum</p>
//                  <p className="w-150 h-auto text-xl text-black/60">Enter your email to receive the published syllabus or latest course overview, with the available learning details and admissions next steps.</p>
//            </div>
          

//             <div className="w-full h-auto flex justify-between items-center gap-4">
//               <div className="w-[50%] space-y-2 py-2">
//                   <Image src={programme.image} width={300} height={300} alt={programme.title} className="w-100 h-100 object-center"/>
//                   <span className="font-bold text-black" > Programme Price: <span className="font-bold text-red-800 text-xl">{programme.price}</span></span>
//               </div>

//               <div  className="w-[50%] h-auto shadow-lg px-4 py-4 border border-black/10 rounded-lg">
//                     <form action="" className="space-y-2">
//                       <p className="text-center text-xl text-red-800"> I am requesting for Curriculum for this Programme</p>
//                         <div className="flex justify-stretch items-center gap-4">
//                           <div className="">
//                                 <label htmlFor="firstname" className="block py-2 font-bold">First name</label><span className="block text-red-500">*</span>
//                                 <input type="text" name="" id="firstname" required className="w-[240px] h-auto py-2 px-2 outline-none border border-black/30 rounded-lg  bg-white dark:bg-gray-900 dark:text-white text-gray-900 placeholder:text-gray-400  dark:placeholder:text-gray-500 transition-all
//                                 duration-200 ease-in-out hover:border-black/50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20" />
//                           </div>

//                          <div className="">
//                                 <label htmlFor="lastname" className="block py-2 font-bold">Last name</label><span className="block text-red-500">*</span>
//                                 <input type="text" name="" id="lastname" required className="w-[240px] h-auto py-2 px-2 outline-none border border-black/30 rounded-lg  bg-white dark:bg-gray-900 dark:text-white text-gray-900 placeholder:text-gray-400  dark:placeholder:text-gray-500 transition-all
//                                 duration-200 ease-in-out hover:border-black/50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20" />
//                           </div>
//                         </div>

//                         <div className="">
//                                 <label htmlFor="email" className="block py-2 font-bold">Email</label><span className="block text-red-500">*</span>
//                                 <input type="email" name="" id="email" required placeholder="you@example.com" className="w-[500px] h-auto py-2 px-2 outline-none border border-black/30 rounded-lg  bg-white dark:bg-gray-900 dark:text-white text-gray-900 placeholder:text-gray-400  dark:placeholder:text-gray-500 transition-all
//                                 duration-200 ease-in-out hover:border-black/50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20" />
//                           </div>

                          
//                         <div className="">
//                                 <label htmlFor="phone" className="block py-2 font-bold">Email</label><span className="block text-black/40">Optional</span>
//                                 <input type="text" name="" id="phone" required placeholder="+234 800 000 0000" className="w-[500px] h-auto py-2 px-2 outline-none border border-black/30 rounded-lg  bg-white dark:bg-gray-900 dark:text-white text-gray-900 placeholder:text-gray-400  dark:placeholder:text-gray-500 transition-all
//                                 duration-200 ease-in-out hover:border-black/50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20" />
//                           </div>


//                         <div className="py-4">
//                             <button 
//                             className="w-100 h-auto px-4 py-2 mx-auto rounded-lg flex justify-center items-center gap-4 bg-blue-950 text-white font-extrabold roubded-lg cursor-pointer">
//                           <span><FaRegEnvelope size={20}/></span>
//                           Email me the programme guide
//                          </button>
//                         </div>
                        
//                     </form>
//               </div>
//             </div>
// {/*  */}
//             <div className="py-4">
//             <Link href={`/courses/${id}`} className="w-50 h-auto rounded-lg inline-block mt-6 bg-blue-950 py-2 text-white font-bold cursor-pointer hover:underline text-center ">
//             <button>
//               ← Back to Course
//             </button>
//         </Link>
//         </div>
         
  
//            </div> 
//     </div>
//   );
// }
