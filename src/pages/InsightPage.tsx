
import React from "react";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";

const InsightPage = () => {
  const handleLogin = () => {
    const apiKey = "f1f4f51b37a3427689cbb4bfbb21785e"; // API key
    const authorizationUrl = `https://auth.flattrade.in/?app_key=${apiKey}`;
    
    toast({
      title: "Redirecting to Flattrade",
      description: "You will be redirected to the Flattrade login page.",
    });
    
    window.location.href = authorizationUrl; // Redirect to Flattrade login
  };

  return (
    <div className="container mx-auto p-6">
      <div className="max-w-md mx-auto bg-card rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-4">Connect to Flattrade</h1>
        <p className="text-muted-foreground mb-6">
          Connect your Flattrade account to import your trading data and get insights.
        </p>
        <Button onClick={handleLogin} className="w-full">
          Login with Flattrade
        </Button>
      </div>
    </div>
  );
};

export default InsightPage;
