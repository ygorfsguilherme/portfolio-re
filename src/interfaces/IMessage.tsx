export interface IMessage {
    errorState: 'sleep' | 'danger' | 'sucess' | 'warning'
    errorMessage?: string

}