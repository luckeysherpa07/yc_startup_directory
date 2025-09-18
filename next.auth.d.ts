import { DefaultSession } from "next-auth";

declare module "next-auth" {
    interface Session {
        id: string & DefaultSession['id'];
    } 
    
    interface JWT {
        id: string & DefaultSession['string'];
    }
}