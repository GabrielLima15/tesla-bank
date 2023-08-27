declare module 'typed.js' {
  interface TypedOptions {
    strings: string[]
    typeSpeed?: number
    backSpeed?: number
    loop?: boolean
    // Adicione outros tipos de opções conforme necessário
  }

  class Typed {
    constructor(element: Element | string, options: TypedOptions)
    // Defina os métodos públicos que você planeja usar
    destroy(): void
    // Adicione outros métodos conforme necessário
  }

  export default Typed
}
