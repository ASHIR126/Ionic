import { IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonMenuButton, IonPage, IonRow, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
// import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera'
import './dashboard.css';
import { Browser } from '@capacitor/browser';


const Dashboard: React.FC = () => {
    const [browser, setBorwser] = useState('Facebook')


    // const showCamera = () => {
    //     const options: CameraOptions = {
    //         quality: 100,
    //         destinationType: Camera.DestinationType.FILE_URI,
    //         encodingType: Camera.EncodingType.JPEG,
    //         mediaType: Camera.MediaType.PICTURE
    //     }

    //     Camera.getPicture(options).then((imageData) => {
    //         // imageData is either a base64 encoded string or a file URI
    //         // If it's base64 (DATA_URL):
    //         let base64Image = 'data:image/jpeg;base64,' + imageData;
    //     }, (err) => {
    //         // Handle error
    //     });

    // }



    const openBrowser = async () => {
        await Browser.open({ url: `'http://${setBorwser}.com/'` });
    };


    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot='start'>
                        <IonMenuButton color='tertiary' />
                        <IonTitle>Dashboard</IonTitle>
                    </IonButtons>
                </IonToolbar>
                <IonContent fullscreen>
                    <IonSearchbar></IonSearchbar>
                    <IonGrid>
                        <IonRow>
                            <IonCol size='6'>
                                <IonButton color='tertiary' expand='block' onClick={openBrowser}>Open Browser</IonButton>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonContent>
            </IonHeader>
        </IonPage>
    )
}
export default Dashboard;