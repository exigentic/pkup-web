create table "public"."event_instance" (
    "id" uuid not null default gen_random_uuid(),
    "event_id" uuid not null,
    "is_rescheduled" boolean not null default false,
    "is_canceled" boolean not null default false,
    "start_date" date not null,
    "end_date" date not null,
    "start_time" time without time zone not null,
    "end_time" time without time zone not null,
    "updated_time" timestamp without time zone,
    "updated_by" text
);


CREATE UNIQUE INDEX event_instance_pk ON public.event_instance USING btree (id);

alter table "public"."event_instance" add constraint "event_instance_pk" PRIMARY KEY using index "event_instance_pk";

alter table "public"."event_instance" add constraint "event_instance_event_id_fk" FOREIGN KEY (event_id) REFERENCES event(id) not valid;

alter table "public"."event_instance" validate constraint "event_instance_event_id_fk";


