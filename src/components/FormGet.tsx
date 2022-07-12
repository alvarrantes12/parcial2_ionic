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
    IonTitle
} from "@ionic/react"; //importa las cosas de react
import UseApi from "./UseApi";


const FormGet: React.FC = ()=> {
    const {data, refetch} = UseApi(`${process.env.REACT_APP_API_URL}/contents`);

    if(!data) {
        return <h1>Cargando...</h1>
    }else{
        return (<IonPage>
            <IonHeader>
                    <IonToolbar>
                        <IonTitle>
                            Examen 2
                        </IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    {data?.map((content: any) => {
                            return (
                                <IonCard className="Joke__Card" key={content.id}>
                                    <IonCardHeader>
                                        <IonCardSubtitle className="Joke__Category"> {content?.id}, {content?.name}</IonCardSubtitle>
                                    </IonCardHeader>

                                    
                                </IonCard>
                            )
                        })}
                    
                </IonContent>
            </IonPage>
        )
    }
    
};

export default FormGet;