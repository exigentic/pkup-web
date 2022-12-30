create table "public"."party" (
    "id" uuid not null default gen_random_uuid(),
    "name" text not null,
    "slug" text not null,
    "description" text,
    "created_time" timestamp without time zone not null,
    "created_by" text not null,
    "updated_time" timestamp without time zone,
    "updated_by" timestamp without time zone
);


CREATE UNIQUE INDEX party_name ON public.party USING btree (name);

CREATE UNIQUE INDEX party_pk ON public.party USING btree (id);

CREATE UNIQUE INDEX party_slug ON public.party USING btree (slug);

alter table "public"."party" add constraint "party_pk" PRIMARY KEY using index "party_pk";

alter table "public"."party" add constraint "party_name" UNIQUE using index "party_name";

alter table "public"."party" add constraint "party_slug" UNIQUE using index "party_slug";


