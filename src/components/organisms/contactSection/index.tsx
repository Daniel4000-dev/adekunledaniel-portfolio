// "use client"

// import type React from "react"

// import { motion } from "framer-motion"
// import { Mail, Phone, MapPin, Send } from "lucide-react"
// import { useState } from "react"
// import Image from "next/image"
// import { SectionHeading } from "@/components/atoms/sectionHeading"
// import { SocialIcons } from "@/components/atoms/icon/socialIcons"
// import { personalInfo } from "@/data/personalInfo"

// export function ContactSection() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   })

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     // Handle form submission here
//     console.log("Form submitted:", formData)
//     // Reset form
//     setFormData({ name: "", email: "", subject: "", message: "" })
//   }

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }))
//   }

//   return (
//     <section className="py-20 bg-white" id="contact">
//       <div className="container mx-auto px-4">
//         <SectionHeading
//           subtitle="Get In Touch"
//           title="Let's Work Together"
//           description="Have a project in mind? I'd love to hear about it. Send me a message and let's discuss how we can bring your ideas to life."
//         />

//         <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
//           {/* Contact Info */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="space-y-8"
//           >
//             <div>
//               <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>

//               <div className="space-y-6">
//                 <div className="flex items-center gap-4">
//                   <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
//                     <Mail className="w-6 h-6 text-blue-600" />
//                   </div>
//                   <div>
//                     <p className="font-medium text-gray-900">Email</p>
//                     <a href={`mailto:${personalInfo.email}`} className="text-blue-600 hover:text-blue-700">
//                       {personalInfo.email}
//                     </a>
//                   </div>
//                 </div>

//                 <div className="flex items-center gap-4">
//                   <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
//                     <Phone className="w-6 h-6 text-blue-600" />
//                   </div>
//                   <div>
//                     <p className="font-medium text-gray-900">Phone</p>
//                     <a href={`tel:${personalInfo.phone}`} className="text-blue-600 hover:text-blue-700">
//                       {personalInfo.phone}
//                     </a>
//                   </div>
//                 </div>

//                 <div className="flex items-center gap-4">
//                   <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
//                     <MapPin className="w-6 h-6 text-blue-600" />
//                   </div>
//                   <div>
//                     <p className="font-medium text-gray-900">Location</p>
//                     <p className="text-gray-600">{personalInfo.location}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div>
//               <h4 className="text-lg font-semibold text-gray-900 mb-4">Follow Me</h4>
//               <SocialIcons variant="filled" />
//             </div>

//             <div className="relative">
//               <Image
//                 src="/images/contact.png"
//                 alt="Contact illustration"
//                 width={400}
//                 height={300}
//                 className="rounded-xl"
//               />
//             </div>
//           </motion.div>

//           {/* Contact Form */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             viewport={{ once: true }}
//           >
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="grid md:grid-cols-2 gap-6">
//                 <div>
//                   <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
//                     Full Name
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
//                     placeholder="Your full name"
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
//                     Email Address
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
//                     placeholder="your.email@example.com"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
//                   Subject
//                 </label>
//                 <input
//                   type="text"
//                   id="subject"
//                   name="subject"
//                   value={formData.subject}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
//                   placeholder="What's this about?"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                   rows={6}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors resize-none"
//                   placeholder="Tell me about your project..."
//                 />
//               </div>

//               <button
//                 type="submit"
//                 className="w-full bg-blue-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 group"
//               >
//                 Send Message
//                 <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//               </button>
//             </form>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }
