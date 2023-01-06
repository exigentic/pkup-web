create table "public"."event" (
    "id" uuid not null default gen_random_uuid(),
    "party_id" uuid not null,
    "name" text not null,
    "description" text not null,
    "start_date" date not null,
    "end_date" date,
    "start_time" time without time zone not null,
    "end_time" time without time zone not null,
    "is_recurring" boolean not null default false,
    "rrule" text,
    "created_time" timestamp without time zone not null default now(),
    "created_by" text not null,
    "updated_time" timestamp without time zone,
    "updated_by" timestamp without time zone
);


CREATE UNIQUE INDEX event_pk ON public.event USING btree (id);

alter table "public"."event" add constraint "event_pk" PRIMARY KEY using index "event_pk";

alter table "public"."event" add constraint "event_party_id_fk" FOREIGN KEY (party_id) REFERENCES party(id) not valid;

alter table "public"."event" validate constraint "event_party_id_fk";


