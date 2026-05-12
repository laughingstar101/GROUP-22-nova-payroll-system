import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../utils/supabase/supabase";
import TopBar from "./TopBar";

export default function Dashboard() {
    const [company, setCompany] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate;

    useEffect(() => {
        const fetchCompany = async () => {
            const { data: { user }} = await supabase.auth.getUser();
            // if user dont exist
            if (!user) { 
                // go back to register
                navigate("/");
                return;
            }
            const { data, error } = await supabase
                .from("Company")
                .select("company_name, company_email, company_id")
                .eq("company_id", user.id)
                .single();
            if (error) {
                console.error("Error fetching company: ", error);
                navigate("/");
            } else {
                setCompany(data);
            }
            setLoading(false);
        };
        fetchCompany();
    }, [navigate]);

    if (loading) {
        return <div className="loader"></div>
    }

    return (
        <div>
            <TopBar/>
            <h1>Hello world</h1>
        </div>
    );
}