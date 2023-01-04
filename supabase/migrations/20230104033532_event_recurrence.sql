create table "public"."event_reccurence" (
    "event_id" uuid not null,
    "reccurence_type_id" smallint not null,
    "separation_count" smallint,
    "max_occurrences" integer,
    "day_of_week" smallint,
    "week_of_month" smallint,
    "day_of_month" smallint,
    "month_of_year" smallint
);


CREATE UNIQUE INDEX event_reccurence_pk ON public.event_reccurence USING btree (event_id);

alter table "public"."event_reccurence" add constraint "event_reccurence_pk" PRIMARY KEY using index "event_reccurence_pk";

alter table "public"."event_reccurence" add constraint "event_reccurence_event_id_fk" FOREIGN KEY (event_id) REFERENCES event(id) not valid;

alter table "public"."event_reccurence" validate constraint "event_reccurence_event_id_fk";

alter table "public"."event_reccurence" add constraint "event_reccurence_recurrence_type_id_fk" FOREIGN KEY (reccurence_type_id) REFERENCES recurrence_type(id) not valid;

alter table "public"."event_reccurence" validate constraint "event_reccurence_recurrence_type_id_fk";


