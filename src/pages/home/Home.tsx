import React, { useState } from "react";
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonContent,
    IonButton,
    IonTitle,
} from "@ionic/react";
import "./Home.css";
import Index from "../../components/Index";
import UseApi from "../../components/Api";
import GetEspecial from "../../components/EspecialGet";

const Home: React.FC = () => {
    const url = `${process.env.REACT_APP_API_URL}/contents`;
    const url2 = `${process.env.REACT_APP_API_URL}/special_contents`;
    const { data, refetch } = Index(url);
    const { refetch2 } = UseApi(url2);

    if (!data) {
        return <h1>Cargando...</h1>
    } else {
        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>
                            Parcial II
                        </IonTitle>
                    </IonToolbar>
                </IonHeader>

                <IonContent>
                    <IonCard>
                        <IonCardTitle>
                            Lista Contenidos
                        </IonCardTitle>
                    </IonCard>
                    {data?.map((content: any) => {
                        return (
                            <IonCard key={content.id}>
                                <IonCardHeader>
                                    <IonCardSubtitle> ID:  {content?.id}</IonCardSubtitle>
                                    <IonCardSubtitle> Nombre:  {content?.name}</IonCardSubtitle>
                                    <IonCardSubtitle> Premier:  {content?.description}</IonCardSubtitle>
                                </IonCardHeader>
                            </IonCard>
                        )
                    })}
                    <IonButton onClick={refetch}>Refrescar</IonButton>
                    <br />
                    <br />
                    <IonCard>
                        <IonCardTitle>Contenidos especiales</IonCardTitle>
                    </IonCard>
                    <GetEspecial></GetEspecial>
                    <IonButton onClick={refetch2}>Refrescar</IonButton>


                </IonContent>

            </IonPage>
        );
    };
};

export default Home; 