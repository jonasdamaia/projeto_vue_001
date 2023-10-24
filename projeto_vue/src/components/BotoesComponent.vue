<template>
    <div>
        <div class="w-[791px] h-[76px] pt-[60px] ml-[325px] font-bold text-[24px] leading-[38.4px] items-center text-black text-center m-auto mb-[100px]">
            <p v-show="mostrar_texto_pt" class="text-white">{{texto_pt}}</p>
            <p v-show="mostrar_texto_Ingles" class="text-white">{{texto_en}}</p>
            <p v-show="mostrar_texto_Espanhol" class="text-white">{{texto_es}}</p>
        </div>
        <div class="flex flex-row justify-between w-[723px] h-[173px] rounded-lg border-solid border-[1px] border-border bg-gray-600 p-[30px] text-[20px] font-semibold leading-8 text-white m-auto">
            <div class="flex flex-col ml-[35px]">
                <p>Javascrip</p>
                <p>React</p>
                <p>Vue</p>
                <p>Tailwind CSS</p>
            </div>
            <div>
                <p>Styled Components</p>
                <p>Saas</p>
                <p>Node</p>
                <p>TypeScrypt</p>
            </div>
            <div class="mr-[30px]">
                <p>Angular</p>
                <p>Java</p>
            </div>
        </div>
        <div id="example-3" class="flex flex-row justify-between border-none mt-[100px] mr-[400px] mb-[0px] ml-[400px]">
            <button 
                class="flex flex-row justify-center p-[10px] items-center bg-gray-600 rounded-[5px] border-none w-[133px]"
                @click="showPt">
                    <img class="mr-[8px]" src='../assets/images/brazil.svg' />
                    <p class="text-white font-semibold">Portugês</p>
            </button>
            <button
                class="flex flex-row justify-center p-[10px] items-center bg-gray-600 rounded-[5px] border-none w-[133px]"
                @click="showEn">
                    <img class="mr-[8px]" src='../assets/images/united-states.svg' />
                    <p class="text-white font-semibold">Inglês</p>
            </button>
            <button
                class="flex flex-row justify-center p-[10px] items-center bg-gray-600 rounded-[5px] border-none w-[133px]"
                @click="showEs">    
                <img class="mr-[8px]" src='../assets/images/spain 2.svg' />
                    <p class="text-white font-semibold">Espanhol</p>
            </button>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            esta_trabalhando: false,
            mostrar_texto_pt: true,
            mostrar_texto_Ingles: false,
            mostrar_texto_Espanhol: false,
            texto_pt: 'Olá, meu nome é Jonas da Maia e eu sou Desenvolvedor Front-end, Tecnologias que tenho experiência:',
            texto_en: 'Hello, my name is Jonas da Maia and I am a Front-end Developer, Technologies I have experience in:',
            texto_es: 'Hola, mi nombre es Jonas da Maia y soy Desarrollador Front-end, Tecnologías en las que tengo experiencia:',
        }
    },
    methods: {
        showPt(){
            this.mostrar_texto_pt = true
            this.mostrar_texto_Ingles = false
            this.mostrar_texto_Espanhol = false
        },
        showEn(){
            this.mostrar_texto_pt = false
            this.mostrar_texto_Ingles = true
            this.mostrar_texto_Espanhol = false
        },
        showEs(){
            this.mostrar_texto_pt = false
            this.mostrar_texto_Ingles = false
            this.mostrar_texto_Espanhol = true
        }
    }
}
</script>