CREATE SCHEMA "auth";
--> statement-breakpoint
CREATE TABLE "auth"."user" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"hashed_password" text,
	CONSTRAINT "user_email_unique" UNIQUE("email")
);
