CREATE SCHEMA "story";
--> statement-breakpoint
CREATE TABLE "story"."story" (
	"id" text PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"title" text NOT NULL,
	"content" text NOT NULL
);
--> statement-breakpoint
ALTER TABLE "story"."story" ADD CONSTRAINT "story_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "auth"."user"("id") ON DELETE cascade ON UPDATE cascade;