import styles from "./DecorationRow.module.css";


interface DecorationRowProps {

    children: React.ReactNode;

}


export default function DecorationRow({

    children,

}: DecorationRowProps) {

    return (

        <div

            className={
                styles.row
            }

        >

            {children}

        </div>

    );

}