create table "public"."recurrence_type" (
    "id" smallint not null,
    "name" integer not null
);


CREATE UNIQUE INDEX recurrence_type_pk ON public.recurrence_type USING btree (id);

alter table "public"."recurrence_type" add constraint "recurrence_type_pk" PRIMARY KEY using index "recurrence_type_pk";


