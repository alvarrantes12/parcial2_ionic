import React from "react";
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonContent,
    IonButton,
    IonTitle,
    IonInput
} from "@ionic/react";

import UseApi from "../components/UseApi";
import "./Home.css";

const Home: React.FC = () => {
    const {data} = UseApi(`${process.env.REACT_APP_API_URL}/contents`);
    if (!data){
        return <h1>Cargando ...</h1>
    }else {
        return(
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>
                            Parcial 2
                        </IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    {data?.map((content: any) => {
                        return (
                            <IonCard key={content?.name}>
                            <IonCardHeader>
                            <IonCardTitle >{content?.name}</IonCardTitle>
                                <IonCardSubtitle >{content?.description}</IonCardSubtitle>
                                
                            </IonCardHeader>  
                        </IonCard>
                        )
                    })}
                </IonContent>
                </IonPage>
        )};
    }


export default Home;