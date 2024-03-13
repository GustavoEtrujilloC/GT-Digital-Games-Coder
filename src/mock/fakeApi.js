const productos = [
    {
        id: '1',
        company: "Ubisoft",
        name: "Call of Duty®: Modern Warfare® III",
        stock: 15,
        price: 69.99,
        description: "En la secuela directa del exitoso juego Call of Duty®: Modern Warfare® II, el capitán Price y la Fuerza operativa 141 se enfrentan a la amenaza definitiva. El criminal de guerra ultranacionalista Vladimir Makarov extiende su alcance por todo el mundo, obligando a la Fuerza operativa 141 a luchar como nunca antes.",
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202308/1623/ba00d855b4f9061f4f7c294506753f58bf33ac28453a8de4.png",
        Plataform: "PlayStation 5",  
        category:["Playstation 5", "Playstation 4", "Novedades"]

    },
    {
        id: '2',
        company: "Ubisoft",
        name: "HELLDIVERS™ 2",
        stock: 10,
        price: 39.99,
        description: "Alístate a los Helldivers y únete a la lucha por la libertad en una galaxia hostil y un juego de disparos en tercera persona rápido, frenético y feroz.",
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202309/0718/ca77865b4bc8a1ea110fbe1492f7de8f80234dd079fc181a.png",
        category: ["Playstation 5", "Novedades"]
        
    },
    {
        id: '3',
        company: "Electronic Arts",
        name: "FC™ 24",
        stock: 10,
        price: 80,
        descripiton: "EA SPORTS FC™ 24 abre paso a una nueva era para The World's Game: más de 19 000 futbolistas con licencia, 700 equipos y 30 ligas en la experiencia futbolística más auténtica hasta la fecha.",
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202310/0214/c21c0669eaca7f3e02c41cad5e1a20f867aafcf14104f046.png",
        Plataform: "PlayStation 4 & 5",  
        category: ["Playstation 5", "Playstation 4", "Novedades"]
        
    },
    {
        id: '4',
        company: "Ubisoft",
        name: "TEKKEN 8",
        stock: 10,
        price: 70,
        description: "Aspectos visuales de los personajes totalmente rediseñados. Modelos elaborados de gran detallismo creados desde cero y gráficos de alta fidelidad que sobrepasan los límites del hardware de última generación y suman realismo a las características peleas de TEKKEN. Entornos vivos y escenarios destructibles se combinan para generar una extraordinaria sensación de inmersión y dar lugar a la experiencia de juego definitiva.",
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202212/1621/rCvLik1PKDSoCaEvTIx42H3Q.png",
        Plataform: "PlayStation 4 & 5",  
        category: ["Playstation 5", "Playstation 4"]
        
    },
    {
        id: '5',
        company: "Ubisoft",
        name: "SKULL AND BONES",
        stock: 10,
        price: 70,
        description: "Adéntrate en el peligroso mundo abierto de Skull and Bones, una experiencia cooperativa de rol y acción, para convertirte en un temible cabecilla pirata.",
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202206/1518/CXwcR0z8bOWFWrgRLpj9PfsI.png",
        Plataform: "PlayStation 5",  
        category: ["Playstation 5", "Playstation 4", "Novedades"]
        
    },
    {
        id: '6',
        company: "Ubisoft",
        name: "God of War Ragnarök",
        stock: 10,
        price: 40,
        description: "Santa Monica Studio nos trae la secuela del aclamado God of War (2018). Únete a Kratos y Atreus en un viaje mítico en busca de respuestas antes de que llegue el Ragnarök. Juntos, padre e hijo deberán arriesgarlo todo mientras recorren cada uno de los Nueve Reinos.",
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202109/2821/KkIiB8w4CBvZspu6zyzOza3p.png",
        Plataform: "PlayStation 4 & 5",
        category: ["Playstation 5", "Playstation 4", "Ofertas"]
        
    },
    {
        id: '7',
        company: "Ubisoft",
        name: "Spider-Man 2",
        stock: 10,
        price: 45,
        description: "Los Spider-Men Peter Parker y Miles Morales se enfrentarán a la prueba definitiva de poder con y sin la máscara mientras luchan para salvar la ciudad, el uno al otro y a sus seres queridos del malvado Venom y de una nueva y peligrosa amenaza simbionte.",
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202306/1219/1c7b75d8ed9271516546560d219ad0b22ee0a263b4537bd8.png",
        Plataform: "PlayStation 5",  
        category: ["Playstation 5", "Playstation 4", "Ofertas"]
        
    },
    {
        id: '8',
        company: "Playstation Studio",
        name: "MLB® The Show™ 24",
        stock: 10,
        price: 80,
        description: "ES TU MOMENTO. ¿TODO LISTO PARA DISFRUTARLO? Adéntrate en un camino hacia la grandeza del béisbol: independientemente de lo que quieras lograr, MLB® The Show™ 24 tiene lo que necesitas.",
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202401/0519/bd9edd225756f2eac93c02ee66e3fb3df62dfcea02c5564c.png",
        Plataform: "PlayStation 5",  
        category: ["Playstation 5", "Playstation 4"]
        
    },
    {
        id: '9',
        company: "RockStar Games",
        name: "Grand Theft Auto Online",
        stock: 10,
        price: 10,
        description: "Disfruta de la experiencia en GTA Online, un universo dinámico y en constante evolución para hasta 30 jugadores, donde podrás pasar de ser un estafador callejero a convertirte en el capo de tu propio imperio criminal. Los jugadores de PlayStation®5 disfrutarán de nuevas mejoras para vehículos de alto rendimiento y de la pantalla de selección de profesiones. Además, accederán a todas las actualizaciones, expansiones y contenidos de GTA Online publicados desde el lanzamiento, tanto en solitario como con sus amigos. Lleva a cabo elaborados golpes cooperativos, participa en carreras acrobáticas llenas de adrenalina, compite en modos Adversario especiales o pasa el tiempo en espacios sociales como clubes nocturnos, salones recreativos, fiestas en el ático, reuniones automovilísticas y mucho más.",
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202202/2816/K6mmm89oNII1iI1aqaClO0wh.png",
        Plataform: "PlayStation 4 & 5",  
        category: ["Playstation 5"]
        
    },
    {
        id: '10',
        company: "Ubisoft",
        name: "Suicide Squad: Kill the Justice League",
        stock: 10,
        price: 50,
        description: "De Rocksteady Studios, los creadores de la saga de Batman: Arkham, llega Suicide Squad: Kill the Justice League, un innovador shooter de acción en tercera persona en el que la panda de inadaptados definitiva tiene que hacer lo imposible: matar a la Liga de la Justicia.",
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202310/1017/927b473e6de3d838b418fddb52f9efb13f19cf4ee8c8dfed.png",
        Plataform: "PlayStation 4 & 5",  
        category: ["Playstation 5"]
        
    }
];

export const getProducts = () => {
    return new Promise ((resolve, reject)=>{
        let error = false
        setTimeout(()=>{
            if (error) {
                reject('Hubo un problemma, intente nuevamente mas tarde')
            }
            else {
                resolve(productos)
            }

        }, 5000)
    
})

}