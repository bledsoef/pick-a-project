import { firestore } from "@/firebaseConfig"
import { collection, getDocs, addDoc } from 'firebase/firestore';
export async function getType() {
    const types = collection(firestore, 'application');
    const typesSnapshot = await getDocs(types);
    const typesList = typesSnapshot.docs.map(doc => doc.data());
    return typesList;
}

export async function getBackend() {
  const backend = collection(firestore, 'backend');
  const backendSnapshot = await getDocs(backend);
  const backendList = backendSnapshot.docs.map(doc => doc.data());
  return backendList;
}

export async function getFrontend() {
  const frontend = collection(firestore, 'frontend');
  const frontendSnapshot = await getDocs(frontend);
  const frontendList = frontendSnapshot.docs.map(doc => doc.data());
  return frontendList;
}

export async function getMobile() {
  const mobile = collection(firestore, 'mobile');
  const mobileSnapshot = await getDocs(mobile);
  const mobileList = mobileSnapshot.docs.map(doc => doc.data());
  return mobileList;
}

export async function getProject() {
  const project = collection(firestore, 'project');
  const projectSnapshot = await getDocs(project);
  const projectList = projectSnapshot.docs.map(doc => doc.data());
  return projectList;
}

export async function getDatabase() {
  const database = collection(firestore, 'database');
  const databaseSnapshot = await getDocs(database);
  const databaseList = databaseSnapshot.docs.map(doc => doc.data());
  return databaseList;
}
  