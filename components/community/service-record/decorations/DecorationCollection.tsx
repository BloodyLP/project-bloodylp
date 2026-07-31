"use client";

import styles from "./DecorationCard.module.css";

import DecorationCard from "./DecorationCard";

import { useDecoration } from "./DecorationContext";

import type { Decoration } from "./types";

interface DecorationCollectionProps {
    decorations: Decoration[];
}

export default function DecorationCollection({
    decorations,
}: DecorationCollectionProps) {

    const {
        selectedDecoration,
        setSelectedDecoration,
    } = useDecoration();

    return (

        <section className={styles.collection}>

            {decorations.map((decoration) => (

                <div
                    key={decoration.id}
                    className={`${styles.collectionItem} ${
                        selectedDecoration?.id === decoration.id
                            ? styles.active
                            : ""
                    }`}
                    onClick={() =>
                        setSelectedDecoration(decoration)
                    }
                >

                    <DecorationCard

                        code={decoration.code}

                        category={decoration.category}

                        rarity={decoration.rarity}

                        classification={decoration.classification}

                        issued={decoration.issued}

                        title={decoration.title}

                        subtitle={decoration.subtitle}

                        description={decoration.description}

                        requirements={decoration.requirements}

                        image={decoration.image}

                    />

                </div>

            ))}

        </section>

    );

}