//import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonProgressBar, IonRow, IonCol, IonGrid } from '@ionic/react';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';
import React, {useState, useEffect} from 'react';
import './Home.css';


const Home: React.FC = () => {

  const [data, setData] = useState([{}])
  const [value, setValue] = useState(0.5)

  useEffect(() => {
    fetch("/members").then(
      res => res.json()
    ).then(
      data => {
        setData(data.members)
        console.log(data)
      }
    )
    // const keyPressHandler = (event: React.KeyboardEvent) => {
    //   if (event.key === "ArrowUp"){
    //     }
    //   }
    // }
  
    // const ProgressBar = () => {
    //   value = value + 0.1
    //   console.log(value)
    // }
  }, [])

  const start = Date().toString()
  let code= String(window.location.href.match('(?<=code=).*'))
  code = code.slice(0, code.indexOf('#'))
  console.log(start)

  const progressLeft = () => {
    setValue(value - 0.1)
  }

  const setProgress = (event: React.KeyboardEvent) =>{
    console.log(event.key)
  }
  return (
    <IonPage>
      <IonHeader>
        <IonTitle class="ion-text-center">
          Health-Survey
        </IonTitle>
      </IonHeader>
      <IonContent fullscreen >
        <IonCard >
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/j23SO29LNWE" title="YouTube video player"></iframe>
          <IonCardHeader>
            <IonCardSubtitle>Destination</IonCardSubtitle>
            <IonCardTitle>Madison, WI</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the
            Wisconsin Territory in 1836.
            </p>
          </IonCardContent>
        </IonCard>
        <IonProgressBar color="secondary" value={value} onKeyPress = {setProgress}></IonProgressBar><br />
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonButton padding-50 onClick={progressLeft}>Left</IonButton> 
            </IonCol>
            <IonCol>
              <IonButton onClick={() => (value < 1)?setValue(value + 0.1): setValue(value)}>Right</IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton>Done</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
