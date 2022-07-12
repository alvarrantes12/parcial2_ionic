import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import ListContents from "../components/ListContents";
import UseApi from "../components/UseApi";

const Home = () => {
  const url = `${process.env.REACT_APP_API_URL}/contents`;
  const {data, refetch} = UseApi(url);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Contenidos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <ListContents data={data}></ListContents>
      </IonContent>
    </IonPage>
  );
}

export default Home;