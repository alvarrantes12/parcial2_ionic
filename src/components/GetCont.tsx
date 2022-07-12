import React from "react";
import {  IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonContent } from '@ionic/react';
import UseApi from "./UseApi";

const GetCont: React.FC = () => {
   
    const {data} = UseApi(`${process.env.REACT_APP_API_URL}/contents`);
        return (<>
            <IonContent>
                {data?.map((content: any) => {
                    return (
                        <IonCard key={content.id}>

                            <IonCardHeader>

                                <IonCardTitle > Name: {content?.name}</IonCardTitle>
                                <IonCardTitle > Description: {content?.description}</IonCardTitle>
                               
                            </IonCardHeader>
                            <IonCardContent>{data?.delivery}</IonCardContent>



                        </IonCard>
                    )
                })}

            </IonContent>
      </>
        )
    };

export default GetCont;