import styles from './Heading.module.css';


type HeadingProps = {
    //Tudo que o react aceita como children está nesse tipo
    children: React.ReactNode;
}

export function Heading({ children }: HeadingProps) {
    /**
     * DESTRUTURAÇÃO - Em JavaScript
     * 
     * 
     * Uma opção para utilizar
     * 
     * const children = props.children;
     * 
     * ----
     * 
     * outra forma de fazer
     * 
     * const { children } = props
     * 
     * 
     * -- outra forma é utilizar direto no parâmetro da função, e é a forma que vamos usar
     */
    return (
        <>
            <h1 className={styles.heading}>{children}</h1>
        </>
    );
}