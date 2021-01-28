import UncontrolledOnOff from "../Accordion/UncontrolledOnOff/UncontrolledOnOff";


export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff,
}


export const OnMode = () => <UncontrolledOnOff />
export const OffMode = () => <UncontrolledOnOff />
export const ModeChanging = () => {
    return <UncontrolledOnOff/>
}

