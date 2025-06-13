import * as React from "react";
import "../App/App.css";

function Card({ className = "", ...props }: React.ComponentProps<"div">) {
  return <div className={`card ${className}`} {...props} />;
}

function CardHeader({ className = "", ...props }: React.ComponentProps<"div">) {
  return <div className={`card-header ${className}`} {...props} />;
}

function CardTitle({ className = "", ...props }: React.ComponentProps<"div">) {
  return <div className={`card-title ${className}`} {...props} />;
}

function CardContent({ className = "", ...props }: React.ComponentProps<"div">) {
  return <div className={`card-content ${className}`} {...props} />;
}

export { Card, CardHeader, CardTitle, CardContent };