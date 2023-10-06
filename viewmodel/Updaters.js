import { firestore } from "@/firebaseConfig"
import { collection, getDocs, addDoc } from 'firebase/firestore';

export async function addProject(projectName, projectDescription) {
    const projectCol = collection(firestore, 'project');
  
    try {
      const docRef = await addDoc(projectCol, {
        name: projectName,
        description: projectDescription,
      });
  
      console.log('Document added with ID: ', docRef.id);
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  }
