import React, { useState } from "react";
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonCard,
    IonTitle,
    IonContent,
    IonCardContent,
    IonCardTitle,
    IonCardSubtitle,
    IonButton,
    IonCardHeader,
    IonLabel,
    IonInput,
    IonItem,
    IonFooter
} from "@ionic/react";
import Method from "../components/Method";

const Home: React.FC = () => {
    const {data} = Method(`${process.env.REACT_APP_API_URL}/contents`);        
    

    if(!data) {
        return <h1>Cargando...</h1>
    } else {
        return (<IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle color={"wheat"}>
                        Examen # 2              
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                {data?.map((content: any) => {
                    return (
                        <IonCard key={content.id}>
                            <IonCardHeader>
                                <IonCardTitle >Name: {content?.name}</IonCardTitle> 
                                <IonCardSubtitle > ID: {content?.id}</IonCardSubtitle>
                                <IonCardSubtitle >Description: </IonCardSubtitle>
                            </IonCardHeader>
                                                
                        </IonCard>
                    )                                            
                })}               
            </IonContent>

                                               
        </IonPage>)
    }
    
}

export default Home;