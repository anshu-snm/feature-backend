const express = require('express');
const bodyParser = require('body-parser');
const {graphqlHTTP} = require('express-graphql');
const { buildSchema } = require('graphql');
const cors = require('cors');

const app = express();

var  events ;

app.use(bodyParser.json());
app.use(cors());

app.use('/graphql',graphqlHTTP({
    schema :buildSchema(`

        type Event {
              name:String
              SUM_INSURED_:String
              NORMAL_ROOM_RENT_LIMIT_:String
              ICU_RENT_LIMIT_:String
              CO_PAY_CLAUSE_:String
              COVID_19_HOSPITALISATION_:String
              CAPPING_ON_AILMENTS_:String
              NEW_BORN_BABY_COVERAGE_FROM_DAY_1_:String
              PRE_AND_POST_NATAL_COVERAGE_:String
              AGE_BRACKET_:String
              CONGENITAL_DISEASE_:String
              CORPORATE_BUFFER_:String
              DAY_CARE_PROCEDURES_:String
              CLAIMS_INTIMATION_:String
              RE_IMBURSEMENT_CLAIMS_REPORTING_SUBMITTING_PERIOD_:String
              ORGAN_DONAR_EXPENSES_:String
              PREMIUM_CALCULATION_:String
              THIRD_PARTY_ADMINISTRATOR_TPA_:String
              LASIK_TREATMENT_:String
              DENTAL_TREATMENT_:String
              SPECIFIC_TREATMENTS_:String
              CASHLESS_CLAIMS_:String
              Quote_:Float
              GST_:Float
              Quote_Including_GST_:Float
              EMERGENCY_AMBULANCE_CHARGES_:String
              PRE_AND_POST_HOSPITALIZATION_COVERAGE_:String
              MATERNITY_BENEFITS_LIMITS_AND_COVERAGES_:String
              _9_MONTHS_WAITING_PERIOD_FOR_MATERNITY_:String
              _1ST_2ND_AND_4TH_YEAR_EXCLUSION_CLAUSE_:String
              _1ST_30_DAYS_EXCLUSION_CLAUSE_:String
              PRE_EXISTING_DISEASE_:String
              DOMICILIARY_HOSPITALIZATION_COVER_:String
              HOSPITALIZATION_INJURY_ARISING_OUT_TERRORISM_:String
               
           
        }

         input EventInput{
            name:String
              SUM_INSURED_:String
              NORMAL_ROOM_RENT_LIMIT_:String
              ICU_RENT_LIMIT_:String
              CO_PAY_CLAUSE_:String
              COVID_19_HOSPITALISATION_:String
              CAPPING_ON_AILMENTS_:String
              NEW_BORN_BABY_COVERAGE_FROM_DAY_1_:String
              PRE_AND_POST_NATAL_COVERAGE_:String
              AGE_BRACKET_:String
              CONGENITAL_DISEASE_:String
              CORPORATE_BUFFER_:String
              DAY_CARE_PROCEDURES_:String
              CLAIMS_INTIMATION_:String
              RE_IMBURSEMENT_CLAIMS_REPORTING_SUBMITTING_PERIOD_:String
              ORGAN_DONAR_EXPENSES_:String
              PREMIUM_CALCULATION_:String
              THIRD_PARTY_ADMINISTRATOR_TPA_:String
              LASIK_TREATMENT_:String
              DENTAL_TREATMENT_:String
              SPECIFIC_TREATMENTS_:String
              CASHLESS_CLAIMS_:String
              Quote_:Float
              GST_:Float
              Quote_Including_GST_:Float
              EMERGENCY_AMBULANCE_CHARGES_:String
              PRE_AND_POST_HOSPITALIZATION_COVERAGE_:String
              MATERNITY_BENEFITS_LIMITS_AND_COVERAGES_:String
              _9_MONTHS_WAITING_PERIOD_FOR_MATERNITY_:String
              _1ST_2ND_AND_4TH_YEAR_EXCLUSION_CLAUSE_:String
              _1ST_30_DAYS_EXCLUSION_CLAUSE_:String
              PRE_EXISTING_DISEASE_:String
              DOMICILIARY_HOSPITALIZATION_COVER_:String
              HOSPITALIZATION_INJURY_ARISING_OUT_TERRORISM_:String
               

         }
        type RootQuery{
            events :[Event]!
        }
        type RootMutation{
            createEvent(eventInput : [EventInput]) :[Event]
        }

        schema{
            query: RootQuery
            mutation: RootMutation
        }
    `) ,
    rootValue:{ 
        events :() =>{
            return  events;
        },
        createEvent :(args) =>{
            // const event = {
            //     _id: Math.random().toString(),
            //     title: args.eventInput.title,
            //     description:args.eventInput.description,
            //     price:+args.eventInput.price,
            //     date:args.eventInput.date
            // };
            console.log(args);
            events = args.eventInput;
            return events;
            
            
        }
    },
    graphiql :true
})
);

app.listen(3000);