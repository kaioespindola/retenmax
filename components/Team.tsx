"use client"

import Image from "next/image"

import { motion } from "framer-motion"

const Team = () => {
    return(
        <section className="bg-[url('/images/bg-team.webp')] bg-cover antialiased p-20">
            <div className="container grid grid-cols-3">

                <div className="grid col-span-2">
                    <h1 className="leading-[80px] text-3xl font-extrabold text-center text-orange-100">
                        Quem são os Guardiões da Retenção
                    </h1>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ ease: 'easeInOut', duration: 1.5 }}
                        className="grid grid-cols-2 h-full">
                        <div className="flex flex-col items-center">
                            <Image
                                width={370}
                                height={476}
                                src="/images/arthur.png"
                                alt="Arthur Maximiliano"
                                className="mb-4"
                            />
                            <h2 className="text-orange-100 font-semibold">CSO e Founder na RetenMax</h2>
                            <h3 className="text-orange-100">Engenheiro de Produção</h3>
                        </div>
                        <div className="flex flex-col items-center">
                            <Image
                                width={370}
                                height={476}
                                src="/images/anderson.png"
                                alt="Arthur Maximiliano"
                                className="mb-4"
                            />
                            <h2 className="text-orange-100 font-semibold">CRO e Sócio na RetenMax</h2>
                            <h2 className="text-orange-100">Gestor de Produtos</h2>
                            <h3 className="text-orange-100">CIM ® Gestor Comercial</h3>
                        </div>
                    </motion.div>
                </div>

                <motion.img
                    initial={{ opacity: 0, transform: "translateX(40px)" }}
                    whileInView={{ opacity: 1, transform: "translateX(0px)" }}
                    transition={{ ease: 'easeInOut', duration: 1.5 }}
                    width="100%"
                    height="auto"
                    src="images/guardioes-side.webp"
                    alt="Guardiões da Retenção"
                />

            </div>

        </section>
    )
}

export default Team
