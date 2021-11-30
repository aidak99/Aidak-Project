import { Injectable, NotFoundException } from '@nestjs/common';
import { Rdv } from '../entities/rdv';

@Injectable()
export class RdvService {
    rdvs: Rdv[] = [
            {id: 1,nomMedecin: 'Dr Sullivan', nomPatient: 'Diagne', prenomPatient: 'aida'
            ,date: '2020-03-05', numeroDossier: '23thgf',heure: '11h25'},
            {id: 2,nomMedecin: 'Dr Ndiaye', nomPatient: 'Mbodji', prenomPatient: 'ibrahima'
            ,date: '2021-11-05', numeroDossier: '4830OP',heure: '11h25'},
            {id: 3,nomMedecin: 'Dr Leriche', nomPatient: 'Seck', prenomPatient: 'Mama'
            ,date: '2020-12-05', numeroDossier: '23850N',heure: '11h25'},
            {id: 4,nomMedecin: 'Dr Kombo', nomPatient: 'Sall', prenomPatient: 'Awa'
            ,date: '2020-12-05', numeroDossier: '23850N',heure: '11h25'},
            {id: 5,nomMedecin: 'Dr Diagne ', nomPatient: 'Faye', prenomPatient: 'Astrid'
            ,date: '2020-12-05', numeroDossier: '23850N',heure: '11h25'},
            {id: 6,nomMedecin: 'Dr Doye', nomPatient: 'Lecoeur', prenomPatient: 'Pascaline'
            ,date: '2020-12-05', numeroDossier: '23850N',heure: '11h25'},
            {id: 7,nomMedecin: 'Dr Loi', nomPatient: 'Montre', prenomPatient: 'Mouhamed'
            ,date: '2020-12-05', numeroDossier: '23850N',heure: '11h25'},
            {id: 8,nomMedecin: 'Dr Grognon', nomPatient: 'Fenty', prenomPatient: 'Rihanna'
            ,date: '2020-12-05', numeroDossier: '23850N',heure: '11h25'},
            {id: 9,nomMedecin: 'Dr Vampire', nomPatient: 'Sorciere', prenomPatient: 'Taylor'
            ,date: '2020-12-05', numeroDossier: '23850N',heure: '11h25'},
            {id: 10,nomMedecin: 'Dr Taraj', nomPatient: 'Heure', prenomPatient: 'huit'
            ,date: '2020-12-05', numeroDossier: '23850N',heure: '11h25'},
            {id: 11,nomMedecin: 'Dr Taraj', nomPatient: 'Heure', prenomPatient: 'Noeuf'
            ,date: '2020-12-05', numeroDossier: '23850N',heure: '11h25'},
            {id: 12,nomMedecin: 'Dr Taraj', nomPatient: 'Heure', prenomPatient: 'Dixons'
            ,date: '2020-12-05', numeroDossier: '23850N',heure: '11h25'},
            {id: 13,nomMedecin: 'Dr Saveur', nomPatient: 'Edouard', prenomPatient: 'Liam'
            ,date: '2020-12-05', numeroDossier: '23850N',heure: '11h25'},
            {id: 14,nomMedecin: 'Dr Olivier', nomPatient: 'Adam', prenomPatient: 'Livia'
            ,date: '2020-12-05', numeroDossier: '23850N',heure: '11h25'},
            {id: 15,nomMedecin: 'Dr Olivier', nomPatient: 'Louis', prenomPatient: 'Jean'
            ,date: '2020-12-05', numeroDossier: '23850N',heure: '11h25'},
            {id: 16,nomMedecin: 'Dr Olivier', nomPatient: 'Julian', prenomPatient: 'Jaxon'
            ,date: '2020-12-05', numeroDossier: '23850N',heure: '11h25'},

            
            
           
        ];
    rdvList(): Rdv[] {
        return this.rdvs;
    }

    create(rdv: Rdv){
        this.rdvs = [...this.rdvs,rdv];

    }

    findOne(id: string){
        return this.rdvs.find(rdv => rdv.id === Number(id));
    }
    update(id: string, rdv: Rdv){
        const rdvToUpdate = this.rdvs.find(rdv => rdv.id === Number(id));
        if(!rdvToUpdate){
            return new NotFoundException("introuvable rdv");
        }
        if(rdv.nomMedecin){
            rdvToUpdate.nomMedecin = rdv.nomMedecin;
        } if(rdv.nomPatient){
            rdvToUpdate.nomPatient = rdv.nomPatient;
        }
         if(rdv.prenomPatient){
            rdvToUpdate.prenomPatient = rdv.prenomPatient;
        }
         if(rdv.date){
            rdvToUpdate.date = rdv.date;
        }
         if(rdv.numeroDossier){
            rdvToUpdate.numeroDossier = rdv.numeroDossier;
        }
        if(rdv.heure){
            rdvToUpdate.heure = rdv.heure;
        }
        const updatedRdv = this.rdvs.map(rdv => rdv.id !== +id ? rdv : rdvToUpdate);
        this.rdvs = [...updatedRdv];
        return{updatedrdv: 1, rdv: rdvToUpdate};
    }

    delete(id: string){
        const nbRdvBefore = this.rdvs.length;
        this.rdvs = [...this.rdvs.filter(rdv => rdv.id !== +id)];
        if(this.rdvs.length < nbRdvBefore){
            return{deletedrdv: 1, nbRdvs: this.rdvs.length}
        } else
        {
            return{deletedrdv: 0, nbRdvs: this.rdvs.length}
        }
    }
}
