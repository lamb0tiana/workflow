import {ConditionFieldType, FieldType} from "@/lib/types.ts";

const users: string[] = ["", "a.ando@hotmail.fr@deleted.com", "admin-riester@estorik.com", "adrien.jouen@grouperiester.fr", "adrien.samay@grouperiester.fr", "adrien.serraille@grouperiester.fr", "alban.simao@grouperiester.fr", "alex.germain@grouperiester.fr", "alex@estorik.com", "alexandra.dubois@riester.fr", "ALEXANDRE.TAISNE@GROUPERIESTER.FR@deleted.com", "alexandre.walther@grouperiester.fr", "alexis.cintract@grouperiester.fr", "alexis.telliez@grouperiester.fr", "amandine.brazier@grouperiester.fr@deleted.com", "amaury.guy@grouperiester.fr", "anais.lamat@grouperiester.fr", "ando.andrianasy@grouperiester.fr", "andre.desousa@grouperiester.fr", "angela.derekeneire@grouperiester.fr", "angelique.bedel@grouperiester.fr@deleted.com9", "anthony.fernandes@grouperiester.fr", "ANTHONY.FERNANDES@grouperiester.fr@deleted.co", "anthony.moreau@grouperiester.fr", "antonio.fernandes@grouperiester.fr@deleted.co", "antonio.valente@grouperiester.fr", "antonio.valente@riester.fr@deleted.com", "apv.beauvais@proteasas.fr@deleted.com64324199", "apv.bussy@grouperiester.fr", "apv.saintmaximin@grouperiester.fr", "aurelie.dethiere@grouperiester.fr", "aurelie.mercier@grouperiester.fr", "aurelien.sottiaux@grouperiester.fr", "aurelien.thevenin@grouperiester.fr", "AURELIEN.THEVENIN@riester.fr@deleted.com", "baptiste.barathieu@grouperiester.fr@deleted.c", "baptiste.sage@grouperiester.fr", "bastien.arnaud@grouperiester.fr", "benjamin.selves@grouperiester.fr", "bruno.angot@grouperiester.fr", "camille.bender@grouperiester.fr", "cedric.oudin@grouperiester.fr", "cedric.regeau@grouperiester.fr", "celine.letallec@grouperiester.fr", "celine.pignon@grouperiester.fr@deleted.com", "celine.vannier@grouperiester.fr", "charfeddine.bougdima@grouperiester.fr", "christelle.etienne@grouperiester.fr", "christine.catoire@grouperiester.fr", "CHRISTOPHE.BERNARD@grouperiester.fr@deleted.c", "christophe.bernard@proteasas.fr@deleted.com"]
const actions = ["Affecter", "Réaffecter", "Appel émis", "Appel reçu", "Prendre un RDV", "Enregistrer commande", "Enregistrer un email", "Enregistrer un sms", "Envoyer un email", "Envoyer un sms", "Compte rendu", "Enregistrer un échec", "Abandonner", "Envoyer un email", "Suivre un RDV non honoré", "Suivre un RDV honoré", "Proposition envoyée"]

const action_fields_candidates: ConditionFieldType[] = [
    {
        field: "Affecter",
        label: "Affecter",
        fieldType: FieldType.CHOICES,
        operators: [{
            label: "affecter à",
            value: "="
        }],
        values: users
    },
    {
        field: "Réaffecter",
        label: "Réaffecter",
        fieldType: FieldType.CHOICES,
        subfields: [
            {
                field: "Concessions",
                label: "Concessions",
                fieldType: FieldType.CHOICES,
                operators: [
                    {
                        label: "est",
                        value: "="
                    }
                ],
                values: ["Renault Argenteuil", "Dacia Argenteuil"]
            }, {
                field: "Vendeur",
                label: "Vendeur",
                fieldType: FieldType.CHOICES,
                operators: [
                    {
                        label: "est",
                        value: "="
                    }
                ],
                values: users
            }
        ],
        operators: [],
        values: null
    },
    {
        field: "Appel émis",
        label: "Appel émis",
        fieldType: FieldType.BOOLEAN,
        subfields: [{
            field: "Le client a répondu",
            label: "Le client a répondu",
            fieldType: FieldType.BOOLEAN,
            values: null,
            operators: []
        },
            {
                field: "comment",
                label: "Commentaire",
                fieldType: FieldType.MULTI_LINE,
                values: null,
                operators: [
                    {
                        label: "égale à",
                        value: "="
                    },{
                        label: "contient",
                        value: "%comment%"
                    }
                ]
            }],
        operators: [],
        values: null
    }
]
export {actions, action_fields_candidates, users}