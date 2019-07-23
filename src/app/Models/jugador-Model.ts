export class Jugador {
    id: string;
    PSNID: string;
    posicion: string;
    calificacion: string;
    goles: string;
    asistencias: string; 
    tarjetas: string;   


    constructor(user?: Jugador) {
        this.id = user && user.id || '0';
        this.PSNID = user && user.PSNID || '';
        this.posicion = user && user.posicion || '';
        this.calificacion = user && user.calificacion || '';
        this.goles = user && user.goles || '';
        this.asistencias = user && user.asistencias || '';
        this.tarjetas = user && user.tarjetas || '';
    }

}