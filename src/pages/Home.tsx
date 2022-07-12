import React from "react";
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonContent,
    IonTitle
} from "@ionic/react";
import useApi from "../components/useApi";
import "./Home.css"

const Home: React.FC = () => {
    const { data } = useApi(`${process.env.REACT_APP_API_URL}/contents`);

    if (!data) {
        return <h1>Cargando...</h1>
    } else {
        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>
                            Lista de Contenidos
                        </IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    {data?.map((content: any) => {
                        return (
                            <IonCard className="Joke_Card" key={content.id}>
                                <IonCardHeader> Nombre
                                    <IonCardSubtitle className="Joke_Category"> {content?.id} {content?.name}</IonCardSubtitle>
                                </IonCardHeader>
                                <IonCardHeader> Descripcion
                                    <IonCardSubtitle className="Joke_Category"> {content?.description}</IonCardSubtitle>
                                </IonCardHeader>

                            </IonCard>
                        )
                    })}
                </IonContent>
            </IonPage>
        )
    }


};

export default Home;