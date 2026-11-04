# BIHAR PRIVATE MULTI-INSTITUTE ITI ERP

**Package version:** V1.0
## Standalone Functional, Data and Implementation Blueprint

**Version:** 1.0 — FROZEN FOR IMPLEMENTATION  
**Planning baseline:** 30 October 2026  
**Product:** Bihar Private ITI — Institute-Purpose Data Management ERP  
**Coverage:** Craftsmen Training Scheme (CTS) only  
**Document type:** Complete standalone ERP functional, data and implementation specification.

**Status meaning:** This document is frozen as an implementation specification. It is not government certification, independent verification of current regulatory publications, evidence of completed software tests or production-release authorization.

## 1. Product purpose

Build one secure web-based ERP to manage the institute-owned administrative, academic, student, staff, training, financial and operational records of multiple private ITIs located in Bihar.

Shared CTS curricula and DGT training-calendar references may serve many institutes. Each institute’s private records, permissions, files and operations remain segregated.

The ERP is an institute data-management system, not DGT, NCVET, NCVT-MIS, NIMS, SIDH or a Bihar government regulatory portal. It may store externally issued identifiers, decisions and supporting evidence. It must not issue government affiliation, government-approved seats, PRNs, official AITT results or NTCs.

### 1.1 Scope boundary

**Included:**

- Principal account onboarding and institute-owned access management.
- Institute and Managing Entity information.
- Trade Units, affiliation evidence, Shift authorization and ITSU register.
- Teaching/non-teaching staff, qualifications and assignments.
- Instructor IPRN/NIMS references and mapping evidence.
- CTS curriculum and versioned DGT training calendars.
- Intake Batches, students, admissions and Enrollments.
- Batch Academic Years and individual trainee progression.
- Institute academic calendar.
- Delivery, lesson and demonstration plans.
- Schedules, delivery logs, attendance, practical, OJT/Group Project and progress.
- Internal assessment and trainee portfolios.
- External examination, result and credential references.
- Fees, receipts, financial corrections and cash closing.
- Inventory, documents, notifications/tasks, imports/exports and reports.
- Dashboards, RBAC, audit, retention and operational recovery.

**Excluded:**

- Government regulatory approval workflows.
- Government application submission or API automation.
- Central seat allotment.
- Standalone Seat Matrix administration.
- Independent DGT Trade Master.
- Regulatory-document upload in Regulatory Admin.
- Official registration/PRN, result or NTC issuance.
- Payroll, hostel and placement/CRM.
- Public marketplace.
- Biometric/AI automation.
- Unrelated education schemes and all-India institution management.
- A new payment gateway or government fee-setting module.

No feature is required solely because a government circular mentions a process belonging to State, DGT or another government authority. Implement only the institute-owned data or validation needed to represent its applicable outcome.

Supporting records for capacity, amendments, participation, reviews, custody, recovery, retention and financial corrections belong inside existing domains. They do not create additional top-level modules.

## 2. Authorities and source-specific rule handling

| Domain | Authoritative basis | ERP responsibility |
|---|---|---|
| Affiliation, Trade Unit and capacity | Applicable DGT norms, transition provisions, government orders and actual institute decisions | Entity identity, institute evidence, authorized Shift scope, effective status and capacity |
| Trade course content | Applicable official CTS curriculum for the Trade/revision | Reviewed curriculum, Course Years, components, hours, Learning Outcomes, Assessment Criteria and requirements |
| Training period and milestones | Applicable DGT CTS calendar and revisions | Calendar versions, schedule variants, milestones and amendments |
| Instructor eligibility | Trade-specific CTS qualification rules and applicable NIMS/IPRN instructions | Qualifications, local review, identifiers and evidenced external mapping |
| Admission entitlement | Applicable admission instructions, State/UT directions and actual external entitlement | Intake context, student eligibility and constrained capacity |
| AITT/result/NTC | Government examination announcements and actual external records | Observed status, identifiers and provenance only |
| Private ITI fees | Applicable DGT guidance, Bihar orders and institute-approved charges | Reviewed fee structures, genuine restrictions and financial records |
| Assessment evidence | Applicable syllabus and assessment/examination guidelines | Portfolios, retention, holds and controlled disposal |

### 2.1 Applicability and precedence

Do not hardcode a universal annual cutoff, hour total, minimum age, qualification, instructor requirement, Shift code, sanctioned capacity or pass threshold.

Preserve applicability by:

- Publication authority, subject and reference.
- Issue date, effective interval and validity.
- Affiliation-application vintage, including 2018/2025 transitional treatment where relevant.
- Institute, Trade Unit, ITSU and Shift.
- Trade and Curriculum revision.
- Intake, Academic Year and Course Year.
- Express restrictions, exceptions and superseding instructions.

Maintain the 2024, 2025 and 2026 CTS Calendars as distinct yearly source contexts. Historical dates must not become later-year defaults.

Treat Bihar DET admission, Seat Matrix and trainee-data-correction directions as separate applicable State sources. Do not import government-portal workflows.

Later notices override only the facts, dates, cohorts, institutions or ITSUs to which they apply. Resolve applicability through issuer authority, subject, specificity, effective interval and explicit supersession.

A general circular does not establish that a particular institute or ITSU actually holds approval.

Ambiguous applicability produces an unverified result with reasons. Block only dependent actions and allow unrelated institute record entry.

### 2.2 Source resolution and evidence ownership

Before an external-status-dependent action:

1. Identify the operative directive/order and applicable amendments.
2. Check issuer, scope, validity and supersession.
3. Establish whether the institute actually holds the resulting required status.
4. Record evaluated facts, unresolved issues and the decision.

Each authority-dependent decision retains, in its existing domain:

- Actual issuer/system and reference/order number.
- Issue, effective, expiry/validity and observation dates where applicable.
- Source subject and applicable institutional/academic scope.
- Authorized quantity or restriction where relevant.
- Supporting evidence.
- Local reviewer, outcome and review time.
- Dated revisions and supersession relationships.

These are operational reference fields, not a government application workflow.

### 2.3 External fact, local review and operational permission

Keep separate:

- **External fact/status:** What an actual external record or response states.
- **Local review:** Whether authorized staff found the evidence sufficient, insufficient, conflicting or unresolved.
- **Operational eligibility:** What the ERP permits after evaluating all applicable conditions.

“Externally verified” means that adequate evidence of an actual external fact has been recorded and reviewed locally. It does not mean the ERP or reviewer granted government approval.

Entering an identifier or passing local validation cannot establish external acceptance.

Preserve effective time separately from observation/review time so historical decisions can be reconstructed.

### 2.4 Structured rules and manual review

Represent operational requirements through structured, versioned conditions or explicit authorized manual-review requirements. A general-purpose legal interpretation engine is not required.

Each required condition produces:

- Satisfied.
- Not satisfied.
- Unverified/not evaluable.
- Not applicable, with a reason.

Approval requires all mandatory conditions to be satisfied or legitimately not applicable.

Store the evaluated inputs, rule/evidence versions, outcome, actor and time.

A local reviewer cannot bypass a mandatory condition through a generic approval checkbox. An exception requires actual authority, scope and validity; local discretion is not a government exception.

### 2.5 Shared source material

Official source material may be reviewed outside the Regulatory Admin entry UI.

Regulatory Admin screens must not include document upload, PDF controls, file links, source-document selection, preview or source-verification controls.

Textual academic metadata, including issuer/reference and syllabus page/section references, remains permitted.

## 3. Users, roles and permissions

| Role | Boundary | Core permissions |
|---|---|---|
| Regulatory Admin | Shared academic references and Principal accounts only | Exactly the three modules in §4; no institute membership or private institute CRUD |
| Principal | Explicitly owned/assigned institutes | Create own institute; manage authorized configuration, users and institute workflows |
| Administrator | Assigned institute | Delegated operations and user management |
| Instructor | Assigned institute, ITSU, subject, Batch Academic Year and period | Assigned planning, training evidence, attendance and internal assessment |
| Student | Own authorized institute record | Permitted admission, schedule, attendance, progress, fees, results and documents |

### 3.1 Accounts and membership

Regulatory Admin creates and activates/deactivates Principal accounts. Regulatory Admin must not create institutes or assign/map institutes to Principals.

The Principal creates the institute after login and required identity checks. Initial ownership membership is created atomically with the institute.

Possession of an institute ID, entity identifier or URL does not establish membership.

The Principal may invite/provision institute-local Administrator and Instructor access, link authorized existing users and provision Student access. Administrators may do so only through explicit delegation.

Invitations grant no privileges until identity checks, acceptance and membership establishment succeed.

Institute-local delegation applies only to valid institute members. No institute user may grant global regulatory privileges or create Principal accounts through local user management.

Users may hold authorized memberships in multiple institutes. Each request uses an explicit server-validated institute context. Privileges do not carry between institutes.

Regulatory Admin privileges must not coexist with private institute membership on the same account. A person needing both functions uses separate authorized accounts.

### 3.2 Sessions, delegation and revocation

Principal deactivation invalidates sessions and persistent authentication tokens. Reactivation requires fresh authentication and does not restore old sessions.

Membership removal and role changes immediately affect authorization. Background jobs, exports, downloads and notifications recheck permission before execution and delivery.

Delegation cannot override financial approval separation or other explicit restrictions.

### 3.3 Principal succession and recovery

Distinguish account recovery from institute ownership transfer.

Normal succession:

- Is initiated by an authorized institute Principal.
- Targets an active Principal account created through permitted account management.
- Requires successor identity checks and acceptance.
- Preserves authorization evidence, effective dates and audit history.

During onboarding, establish documented recovery contacts and authorized recovery reviewers.

When normal access is unavailable, recovery requires verified institute/Managing Entity authority and independent review. The requester must not approve their own exceptional recovery.

A narrowly scoped operational procedure may technically execute an already authorized membership change. It must identify the exact institute, successor and change, grant no general private-record access, and invalidate obsolete access.

This procedure is not a Regulatory Admin institute-mapping function or a new global application role. Regulatory Admin may manage the successor’s account but cannot assign the institute.

Where authority cannot be established, transfer remains blocked.

### 3.4 Scoped responsibilities

Entity custodians, records custodians, financial approvers and recovery reviewers are restricted responsibilities assigned to eligible existing users, not additional global roles.

A responsibility grants only its defined actions and resource scope.

### 3.5 Enforcement

Enforce permissions server-side for every list, detail, search, create, edit, lifecycle action, report, export, download, file operation and background task.

Use current memberships, assignment periods and resource scope. UI visibility alone is insufficient.

## 4. Regulatory Admin — exactly three modules

### 4.1 CTS Curriculum

Support create, view, draft editing, publication and new revisions.

This workspace owns CTS Trade identity:

- Scheme.
- Stable `dgt_trade_code` when genuinely available.
- `trade_code`.
- `trade_name`.

No standalone DGT Trade Master or duplicate independently edited Trade registry.

Curriculum versions contain:

- Version code and revision label/month-year.
- NSQF level.
- Duration in months.
- Syllabus unit strength, explicitly reference-only.
- Applicability.
- Draft/published/superseded state.

Each applicable Course Year contains:

- Source-prescribed components.
- Compulsory/optional distinctions.
- Hour targets and optional-hour limits.
- OJT/Group Project requirements.
- Learning Outcomes and Assessment Criteria.
- Syllabus content and subject/topic relationships.
- Entry and instructor qualification requirements.
- Applicable assessment-rule references.
- Equipment requirements.
- Sequence and academic source page/section references.

Shared subject/content identities belong here. Institute-local delivery labels may map to them without replacing canonical syllabus ownership.

Reconcile component totals independently of LO/topic allocations. Do not double-count overlapping descriptions.

Publication validates completeness, required relationships, totals, applicability and stable Trade identity. Unresolved applicable requirements cannot be represented as settled data.

Published versions are immutable. New applicability creates a revision while preserving previous versions and Batch links.

Trade identity/code cannot silently change. Genuine corrections require an audited process preserving historical references and aliases.

A superseded version remains available where still historically or specifically applicable. Superseded does not mean universally invalid.

Publication is platform-reviewed academic data, not government approval.

No PDF/document-related controls.

### 4.2 DGT Training Calendar

Support create, view, draft editing, publication and revisions for the selected Academic Year/intake context.

Store every applicable schedule variant:

- Course duration.
- Course Year.
- Six-month Batch I/II where relevant.
- Training start/end.
- Relevant academic milestones.
- Referenced admission, verification and AITT events with their actual government owner.

Institute execution records cannot edit government-owned milestones.

Publication validates context, date relationships and schedule completeness.

Published versions are immutable. Revisions preserve old/new values, scope, reason, effective context and changed by/at. Unchanged milestones and previously pinned versions remain intact.

Maintain the shared Shift catalogue and contextual external reporting-code mappings as supporting records here, not a fourth module.

Physical Shift identity is not dependent on one annual calendar. A reporting code does not authorize a Shift or establish institute eligibility.

No PDF/document-related controls or permanent session dates in code.

### 4.3 Principal Account Management

Support Principal login creation, account viewing, activation/deactivation and secure first-login setup/reset.

Deactivation revokes sessions; activation requires fresh authentication.

No institute creation, mapping, affiliation approval, private institute operational access or arbitrary role delegation.

## 5. Institute onboarding and ownership

### 5.1 Managing Entity

Maintain the actual applicant/controlling entity managing the ITI.

Store legal form, registered name, genuine registration/incorporation identity where applicable, registered address and permitted contacts.

Selectable forms follow applicable norms/orders: Society, Trust and other forms only where permitted, including company, proprietorship, institution or individual as applicable.

Do not require a Society/Trust number for another legal form or fabricate identifiers.

A Principal may register an entity or request linkage to an existing genuine match, subject to identity and access checks.

Separate:

- Shared legal identity and revisions.
- Institute-to-entity relationship and effective authorization.
- Institute-private documents, contacts and evidence.

Entity sharing does not grant access to another institute.

Matching uses minimum necessary identity data and must not expose other institutes, memberships or private evidence.

An authorized custodian may maintain shared legal facts. Material changes require reviewed evidence and effective history. Notify affected authorized users without disclosing unrelated private records.

Conflicting claims remain pending verification.

A legal-identity update does not automatically transfer institute ownership, grant membership or change affiliation.

Controlling-entity changes create effective relationship revisions and preserve previous evidence.

### 5.2 Institute setup

Maintain:

- Institute name.
- Bihar location and contacts.
- Type: Private ITI.
- Genuine institute/MIS identifiers.
- Managing Entity identity/type and relationship.
- Authorized Principal/contact.
- Operational status.

Validate applicable identifier formats/uniqueness. Missing official identifiers remain null.

Maintain distinct verification states for entity identity, legal-form applicability and institute authorization.

Draft setup may continue with pending verification. Ready-for-operations requires verified entity identity/type, authorized relationship and required local setup data.

Local readiness is not affiliation or admission permission.

Every private operational record has an owning institute.

## 6. Trade Unit and ITSU

### 6.1 Trade Unit

Create against the Curriculum-owned CTS Trade identity.

Store institute, Trade, unit number, affiliation state, actual order/reference, dates, effective interval, evidenced sanctioned capacity, separate provisional planning capacity and immutable revisions.

Preserve actual decision scope, authorized Shifts, restrictions and relevant application-vintage provisions.

A proposed Unit may exist without sanction. Approved/sanctioned status requires adequate evidence of an actual applicable decision.

One Shift’s approval does not grant another.

Curriculum unit strength is a syllabus reference, not sanctioned capacity. A Unit row alone proves neither authorization nor admission entitlement.

Later decisions append revisions rather than overwrite used history.

### 6.2 Shift and ITSU

Create explicit ITSU registration:

`institute_id + trade_unit_id + shift_id`

Use shared valid Shift identities. Confirm actual Unit-decision coverage for the selected Shift.

Missing/unclear evidence leaves official Shift eligibility unverified.

Do not generate Trade Unit × Shift combinations automatically or infer Shift timing fields.

Prevent duplicate active registrations of the same institute/Unit/Shift. Retired records retain history; reactivation must not create ambiguous duplicates.

ITSU active/inactive state is separate from affiliation, NIMS mapping, Seat Matrix inclusion and admission eligibility.

### 6.3 External reporting codes

Calendar/State codes, including six-month Batch II codes, are source/version-specific reporting identities.

Store mappings only where needed for actual reports, with source, period, duration and cohort context. They do not create physical Shift authorization.

### 6.4 Capacity scope and revisions

Each capacity restriction identifies its actual scope: Unit, ITSU, intake, defined group or another expressly supported context.

A quantity shared across ITSUs is one constraint, not a copied allowance.

Each constraint has stable identity and effective revisions. A revised evidence row must not create a fresh unused allowance.

Determine whether a later order replaces, adds, restricts, suspends or changes scope. Ambiguity blocks affected admissions pending review.

Maintain these records within affiliation/intake domains, without standalone Seat Matrix administration.

## 7. Staff and instructor management

Maintain teaching/non-teaching profiles, designations, educational/trade qualifications, training certificates, experience, joining/leaving dates, employment status and institute assignments.

Principal/Administrator accounts may link to staff. Student access remains a separate relationship.

Review qualifications by Trade, subject and date against applicable CTS requirements, including NCIC or other prescribed instructor training where actually required.

Maintain actual IPRN, NIMS evidence, eligible Trades/subjects, ITSU mappings, periods, remapping history and authorized vacancy/replacement exceptions.

Distinguish:

1. Employment.
2. Locally reviewed qualification.
3. Actual externally evidenced NIMS approval/mapping.
4. Local teaching assignment.

Use locally recorded, pending external verification, externally verified, rejected and inactive states with evidence/history. Entering an IPRN never automatically promotes status.

Apply relevant current FAQs/amendments, not a fixed historical version or permanent cutoff.

Principal or delegated Administrator reviews eligibility evidence. Instructors may submit evidence but cannot self-approve where independent review is required.

Check applicable identifier uniqueness and mapping limits within authorized visibility. Do not claim complete national verification from platform-local records.

Expiry, departure or adverse mapping changes flag future assignments/admissions. Preserve historical legitimate instruction.

## 8. Batch and admission

### 8.1 Canonical intake Batch

Create directly from registered ITSU with:

- Owning institute.
- ITSU and stable Trade identity.
- Unit revision or explicit unverified planning reference.
- Published applicable Curriculum version.
- Published applicable Calendar baseline and schedule variant.
- Intake year/context.
- Capacity-verification state.

No separate Cohort master or Final Seat Matrix workspace/table is required to create a planning Batch.

A planning Batch may lack verified affiliation, capacity, mapping or entitlement. It must not display invented official seats.

Lifecycle: planned, active, completed or cancelled. Admission eligibility is separate.

Attaching verified evidence creates an audited event preserving original planning references and each decision’s evidence.

Mistaken planning identity may be corrected before dependent commitments through audited checks. After admissions/training exist, use controlled correction/transfer or cancellation/replacement rather than direct reassignment.

### 8.2 Planning, offering and approval gates

Keep separate:

1. Draft planning.
2. Offering as a government-eligible destination.
3. Individual admission approval.

Offering requires current evidenced affiliation/Shift authorization, required mapping, actual intake entitlement and capacity.

Individual approval additionally checks student eligibility, valid admission window, remaining capacity and all applicable conditions.

Clearly labelled preliminary enquiries/applications may be recorded where permitted. They cannot promise official registration, consume seats or be presented as approved admissions.

Verified Unit-capacity and external-entitlement snapshots are mandatory for offering and approval. Include source revisions and evaluation time.

Re-evaluate date-sensitive facts at actual approval.

### 8.3 Admission eligibility

Validate:

1. Institute/Unit/ITSU affiliation and Shift authorization, including transitional treatment.
2. Instructor qualification and actual applicable NIMS/IPRN mapping or an express dated exception.
3. External ITI + Trade + Shift + Unit + intake entitlement, including revised inclusion, suspension/restriction and applicable Bihar DET directions.
4. Official admission window or genuine extension/exception.
5. Student education, relevant subjects and age using the prescribed reference date.
6. Capacity under every applicable sanctioned/external constraint, including continuing trainees where required.

Record context, issuer/reference, quantity, dates, evidence, reviewer, rules and result.

Unverified required facts block dependent approval only. Local Unit or instructor existence does not prove entitlement.

### 8.4 Atomic seat consumption

Maintain canonical consumption linked to all applicable constraints.

One transaction must resolve valid constraints, verify capacity, prevent duplicates, approve admission and create/link Enrollment consistently.

Use the smaller quantity where independent limits constrain the same intake; satisfy each differently scoped limit separately.

Batches sharing a constraint consume from the same allowance. Snapshots are historical evidence, not separate balances.

Consumption persists across constraint revisions without duplication. Admission counts once within each applicable independent constraint.

Retries are idempotent; concurrency cannot exceed limits.

If a reduced limit falls below existing consumption, flag the condition and block additional intake. Preserve existing admissions pending authorized review.

Seat release is an audited event under applicable rules, never deletion of consumption.

### 8.5 Student, application and external data

Maintain institute-local profiles with necessary personal, birth, qualification/subject and contact data.

Validate applicable requirements at review and approval. Do not universally hardcode age 14 or Class 10.

Admission selects an eligible Year-1 Batch. Review/approve/reject without silent reassignment.

Keep local state separate from externally observed submission, return, rejection, correction and acceptance.

Store actual issuer/system, reference, observation and evidence.

SRN, APAAR, PRN and similar identifiers remain null until genuinely issued/entered. Entered and verified are distinct. No automatic generation/submission or claimed external acceptance.

Authentication identity may span authorized memberships; private student records remain institute-local.

Duplicate checks follow applicable rules and authorized visibility. Cross-institute matches must not reveal private details. Without an authorized verification mechanism, do not claim platform-wide duplicate clearance.

### 8.6 Enrollment, lifecycle and transfer

One canonical Enrollment represents an admitted institute-owned placement. Prevent unintended duplicate parallel active placements.

Normal Year 1 → Year 2 retains the same Batch/Enrollment.

| Event | Required control | Treatment |
|---|---|---|
| Rejection | Authorized review/reason | No approved consumption |
| Withdrawal/dropout | Effective date, actor and reason | Preserve history; release only if permitted |
| Cancellation | Authorized evidence-backed decision | Append cancellation and permitted consumption correction |
| Transfer | Authority, dates and restricted exchange | Preserve source placement; validate destination independently |
| Correction | Evidence and impact-appropriate approval | Append correction; transactionally update affected constraints |
| Completion | Separate academic/external outcomes | Preserve records; no automatic seat reuse |

Transfer-out closes/changes source placement effectively. Transfer-in creates/links destination placement. Cross-institute destinations own their own profiles/Enrollments.

Do not overwrite source Batch, attendance, assessment, fees or identifiers. Within-institute reassignment uses effective placement history.

Permitted overlap requires explicit applicable rules and no duplicate credit, charges or capacity consumption.

Fee consequences require separate financial authorization.

### 8.7 Later invalidation

Adverse/expired evidence triggers review and blocks affected future decisions as necessary.

Do not automatically cancel admissions, delete training or release seats.

Preserve original decision context. Retrospective corrections require actual supporting authority and an audited process.

## 9. Batch Academic Year and institute calendar

Batch identifies intake, not teaching year.

Maintain Batch Academic Years with Academic Year label, Course Year, pinned Curriculum Year, applicable schedule/version, lifecycle and instructor context.

One-year courses have only their applicable Course Year. Six-month courses use applicable Batch I/II schedules.

Resolve schedules by duration, Course Year, intake, Calendar year/version and amendments—not universal dates.

### 9.1 Uniqueness and progression

Enforce uniqueness for:

**institute + intake Batch + Course Year + controlled academic occurrence/context**

Editable labels must not evade uniqueness. Schedule/instructor revisions do not create duplicate Academic Years.

Individual participation records link Enrollment, occurrence, attempt/continuation and dates.

Authorized repeat/resumption may use a later occurrence while retaining intake identity and all prior evidence. Do not create a new intake Batch solely for continuation or repeat.

Repeats/resumptions require applicable eligibility and curriculum/schedule treatment; data support does not grant regulatory permission.

Prevent unintended overlapping participation and duplicate credit.

### 9.2 Baselines and amendments

Preserve original calendar baseline.

Attach later amendments through adoption events containing revision, scope, effective date, applicability basis, actor/time and affected activities.

Mandatory amendments must be evaluated at dependent decisions even while local adoption is pending. Unresolved applicability flags/blocks the affected action.

Do not rewrite past decisions. Reschedule affected future execution explicitly.

### 9.3 Institute Academic Calendar

Maintain local working days, weekly offs, Bihar/state/institute holidays, closures and planned training days.

It consumes official schedules without altering government dates.

Use “Academic Year” in UI. Distinguish intake year and Course Year. External session/intake codes do not create another Year master.

## 10. Training planning and execution

Sequence:

**Batch Academic Year → Curriculum requirements → Instructor Assignment → Delivery/Lesson/Demonstration Plan → Daily Schedule → Delivery Logs → Attendance/Practical/OJT/Progress**

Curriculum owns content/hours; DGT Calendar owns official periods/milestones; institute records own local execution.

Maintain:

- Delivery plans: components, content/LO, duration, instructor, dates and revisions.
- Daily schedules: occurrence, actual date/time, minutes, content, resources and instructor.
- Delivery logs: actual duration/content, actual instructor/substitution and corrections.
- Attendance: legitimate participation, session, status and attended minutes.
- Practical: job/task, equipment, trainee evidence, feedback and LO/criteria.
- OJT/Group Project: requirement, participants, actual host/project, dates, evidence and evaluations.
- Portfolio/progress: coverage, duration, competency and observations.

### 10.1 Attendance and duration

Support present, absent, allowed leave and OJT statuses. Status alone creates no credited minutes.

Use integer minutes canonically, with explicit display conversion/rounding.

Separate planned, delivered and trainee-attended duration.

Count group delivery once; maintain individual attendance separately. Do not sum trainee minutes as instructor delivery.

Attendance cannot exceed eligible actual activity duration. Prevent overlapping duplicate credit; review conflicts.

Cancelled sessions contribute no delivery/attendance. Make-up sessions are separate linked records. Record partial attendance accurately.

Substitutions require dated authorization; retain planned and actual instructors. Separate actual delivery assignments from the immutable scheduled assignment pin; partial delivery by the planned instructor and an authorized substitute belongs to the same schedule. Once delivery or attendance evidence exists, preserve the schedule execution context, including date/time. Corrections and make-up/rescheduling use separately identified, audited records rather than rewriting used schedules or copying historical credit.

OJT duration requires evidenced activity and applicable counting rules.

Assignments must cover actual activity dates. Later expiry does not invalidate legitimate historical instruction.

Lock finalized records; corrections append review/history and update derived reports. An erroneous attendance interval can be voided with an append-only zero-credit successor while retaining the original evidence and other genuine intervals.

### 10.2 Source-specific hours

No universal 1,200/150/240 constants.

Original source examples for Electrician, Fitter and Mechanic Diesel CTS v3.0 describe 1,200 regular hours + 150 OJT/Group Project + up to 240 optional hours per applicable year, subject to exact source verification.

Electrician examples:

- Year 1: Practical 840 + Theory 240 + Employability 120.
- Year 2: Practical 840 + Theory 300 + Employability 60.

Keep optional hours optional. Do not double-count component, subject/topic and LO descriptions.

## 11. Assessments, examinations and completion

### 11.1 Internal assessment

Maintain formative/component, practical/project assessments, marks/grades, authorization and corrections.

Reference participation, Curriculum version/Year, LO and criteria.

Version rules for maximum marks, weighting, aggregation, rounding, absence/incomplete treatment, applicable attendance, pass thresholds, reassessment, exemptions and corrections.

Source-prescribed rules belong to Curriculum. Institute configurations cannot override mandatory requirements.

Bind calculations to exact versions. Do not silently recalculate finalized outcomes.

Before academic completion, evaluate applicable training, OJT/project and assessment requirements.

Incomplete/cancelled administrative closure must not imply successful academic completion or official exam eligibility.

### Explicit internal-result student release

Only an active local Principal or explicitly delegated local ASSESS authority may release or withdraw an exact immutable original result or independently approved correction revision. The proposed actor clause is P,D:ASSESS: delegated authority means the local Administrator has the exact release/withdraw permission, not a role label. Instructor, Student and Regulatory Admin receive no release authority in this conservative proposal; ordinary assignment never implies publication.

Assessment lock is a release prerequisite. Finalization, lock and approval of a correction never release a version automatically. A new original initializes a hidden publication owner. An approved but unreleased correction leaves the prior explicit release visible. Student reads return only the current explicitly released version of their own result, never the newest revision merely because it exists. Private calculations, source/input/criterion snapshots, evaluator/approver identities and internal moderation notes remain excluded from the Student projection.

Withdrawal requires a normalized nonblank reason. Withdrawing the visible release hides it without silently falling back to an older version; withdrawing an older non-visible release does not replace the visible one. An authorized new operation may explicitly re-release an original or approved revision. No independent two-person approval is invented for release itself; the existing independent correction-approval contract remains mandatory.

Publication and withdrawal use an immutable event history plus one versioned projection per original result. Actor/session and tenant authority, exact target/revision, expected assessment/publication versions, stable operation key and observed release identity are rechecked under canonical owners. Event, projection, audit and domain receipt commit or roll back together. Identical authorized replay returns the original receipt before stale-state checks. Corrections never rewrite the released snapshot. These are internal institute results, not external government result publication.

### 11.2 Portfolio and retention

Maintain practical jobs, record books/daily diaries where applicable, assignments, attendance and formative evidence.

Retain through the forthcoming examination where prescribed, including the Electrician CTS v3.0 §2.4.2 example, and any longer binding requirement.

No universal month count or automatic exam-day deletion.

Record retention basis, examination context, review dates, holds and disposal decisions.

Active examination/audit/legal/institutional holds block disposal. No disposal approval overrides a hold. Hold release requires authorized evidence that its basis ended.

Unknown retention/examination obligations are not permission to purge.

Disposal requires satisfied requirements, released holds, independent appropriate review and a minimal retained audit.

### 11.3 External examination, result and credential

Record genuine external cycles, candidate/exam identifiers, acknowledgements, dates and statuses.

Internal marks never become official results.

Official result/NTC references require actual provenance. Corrections append a new external fact while preserving previous versions.

Keep internal completion, external exam outcome and credential issuance separate.

Never generate government PRNs, results or certificates.

Imports require preview, validation, row errors, duplicate detection and idempotent retry.

## 12. Institute fees and receipts

Manage structures, charges, dues, payments, receipts, waivers, refunds, cancellations and cash closing.

Review applicable DGT guidance, Bihar Private ITI orders, context and dates before applicability.

Do not use Government ITI schedules as defaults or historical national guidance as a current Bihar cap without authority.

### 12.1 Fee-rule states

Use draft, source-review-required, reviewed/applicable and superseded/inactive states.

Unreviewed new structures permit preparation/evidence collection but cannot authorize new charges or collection.

Previously valid obligations retain their historical basis, subject to later restrictions.

Historical real payments may be recorded/imported with provenance and reconciliation. This does not activate or certify an unreviewed structure.

Authorized refunds, reversals and corrections remain possible. Never conceal actual financial events because review is incomplete.

Reviews record checked context, restrictions and unresolved questions—not universal compliance claims.

### 12.2 Ledger controls

Use append-only reconcilable trainee ledgers.

Define charge components, allocation, partial payments, overpayments/unallocated credits, adjustments, waivers, refunds, reversals and balances.

Posted movements are corrected through linked entries, not deletion/editing.

Payment references are idempotent within documented institute/channel scope.

Receipt numbers are unique within documented institute/year/series scope; cancelled numbers remain recorded and unreused.

Refunds reference original payments and cannot exceed refundable amounts.

Require requester/approver separation for refunds, waivers, material adjustments and closed-period reopening. One acting user cannot bypass required separation.

Post related movements, allocation and receipts transactionally.

## 13. Inventory, documents, communication and reports

### 13.1 Inventory

Maintain assets/consumables, purchase references, locations, issue/return and adjustments.

Use audited movements; prevent invalid quantities and concurrent over-issue. Distinguish individual assets from stock quantities.

Compare against applicable syllabus equipment without automatically claiming compliance.

### 13.2 Documents

Support private institute/entity-relationship, affiliation, staff, trainee, admission, receipt, assessment and external-result files.

Enforce storage/access authorization, malware/type/size checks, versioning, retention and access audit.

Entity sharing grants no cross-institute file access.

Avoid permanent public URLs; delivery checks current permissions.

### 13.3 Notifications/tasks

Tie reminders to actual due dates, expiry, academics and fees.

Scope recipients and recheck queued delivery. Minimize sensitive content.

No unapproved cross-institute communication or government automation.

### 13.4 Reporting/import/export

Provide institute/ITSU/Batch/Academic Year reports for intake, capacity, mapping, attendance, duration, coverage, OJT, assessment, finance, inventory and audit.

Dashboards derive from canonical facts. Report as-of context and distinguish unknown from zero.

Imports validate scope/references, preview errors and support idempotency. They cannot bypass eligibility or create external verification automatically.

Exports recheck authorization at generation/delivery and record scope, filters and requester.

## 14. Data ownership / logical schema

Use one persistent MySQL application database, not one database per institute.

| Domain | Core records |
|---|---|
| Identity/security | Users, memberships/grants, sessions, invitations, succession/recovery and audit |
| Shared academics | Trade identities, Curriculum versions/Years/components/content/LO/criteria/rules; Calendar versions/variants/milestones/amendments; Shifts/reporting mappings |
| Institute identity | Entity identity/revisions, institute relationships, institutes and private evidence |
| Affiliation | Units, decisions, Shift scope, capacity constraints/revisions and ITSUs |
| Staff | Profiles, qualifications/reviews, IPRN/mapping facts, exceptions and assignments |
| Intake | Batches, verification events, entitlement, consumption, students, applications, Enrollments and placement/lifecycle history |
| Execution | Batch Academic Years, adoption events, participation/progression, local calendar, plans, sessions/logs, attendance, practical, OJT and portfolio |
| Completion | Assessment bindings/outcomes/corrections, external observations, retention/holds |
| Operations | Fee reviews, ledger/allocation/payments/receipts/refunds, inventory movements, files, tasks and import/export jobs |

### 14.1 Relational invariants

- Trusted institute ownership and same-institute foreign-key consistency.
- Explicit restricted exceptions for shared academics/entity identity.
- Stable Trade identity across revisions.
- Unit key: institute + Trade + unit number.
- Active ITSU key: institute + Unit + Shift.
- Uniqueness never implies official authorization.
- Batch baseline and historical evidence remain reproducible.
- Enforced Batch Academic Year uniqueness.
- Canonical Enrollment/placement with audited transfer history.
- Training/assessment references valid participation and dated assignments.
- Consumption links all applicable shared constraints without reset/double-counting.
- Nullable unissued official identifiers; entered and verified remain distinct.
- Financial, external-result and disposal corrections retain audit.
- Effective and recorded/reviewed times where needed.
- Appropriate composite foreign keys, unique/check constraints, transactions, locking and optimistic concurrency.

No duplicate independently edited Trade, Year, Batch-selection, capacity balance, Curriculum, Calendar or official-result master.

Technical table names may differ if ownership/invariants remain equivalent.

## 15. Lifecycle, changes and historical integrity

Version/audit curriculum publication, Calendar amendments/adoption, affiliation, mapping, eligibility, trainee lifecycle, academic completion, external results and finance.

Each material transition defines actor/approver, prerequisites, evidence, effective/recorded times, dependencies, capacity/academic/financial effects and correction paths.

Published/finalized history is not silently overwritten.

New instructions affect only applicable contexts. Actual retrospective decisions are represented explicitly.

Shared-reference changes do not silently migrate institutes; record affected contexts and required adoption/review.

Never silently delete referenced external facts, ledger entries or course evidence.

## 16. UI and user interaction plan

Use one shared design system for typography, layout, forms, tables, badges, dialogs and responsive navigation.

Provide permission-aware actions with server enforcement; appropriate search/filter/pagination; stable loading skeletons; distinct empty/error/retry/unauthorized/success states.

Avoid false zeroes, stale institute context, duplicate submission/hydration and transition flicker.

Support accessible labels, keyboard operation, focus handling, modal focus return and mobile layouts.

Consequential actions require consistent confirmation.

Distinguish local readiness/publication, evidence review, externally evidenced status and operational eligibility.

Do not label local approval as government authorization. Explain blocked actions and required evidence.

## 17. Security and operations plan

Implement secure authentication/reset, session revocation, rate limits and appropriate CSRF/CORS handling.

Authorize APIs, jobs, files, reports and delivery paths using current context.

Reject forged institute IDs, role grants and cross-institute references.

Use parameterized queries, validation, secret-safe logs, private storage, transactional movements and idempotent retries.

Protect audit integrity and record material access/change events.

Use guarded forward migrations. Destructive reset requires explicit operator authorization, verified backup and checked target.

### 17.1 Recovery

Back up database, documents and required configuration with access controls and retention.

Approve measurable recovery-point/time objectives before production release.

Demonstrate consistent restoration of database/files, including references, ledgers, capacity, audit and access.

Reapply current holds, disposal decisions and revocations before reopening access. Restore must not reactivate obsolete accounts, memberships or sessions.

Backup expiry must respect applicable retention obligations.

Maintain owners, monitoring, alerts, runbooks and restore-test evidence. Backup existence alone is insufficient.

## 18. Implementation sequence

| Stage | Deliverables | Exit condition |
|---|---|---|
| 01 — Foundation | Authentication, memberships, isolation, UI, audit and migrations | Tested private-path boundaries and revocation |
| 02 — Global academic | Three modules, curriculum/rules, calendars and supporting references | Valid publication and immutable history |
| 03 — Institute core | Institute/entity setup, users/recovery, staff, Units and ITSUs | Isolation and scoped ownership proven |
| 04 — Instructors/intake | Qualifications/mapping, planning, entitlement and capacity | Planning works; offering/approval gates hold |
| 05 — Students | Eligibility, admission, Enrollment and lifecycle | Concurrent intake, transfer and release consistency |
| 06 — Academic Year | Occurrences, progression, adoption and local calendar | Continuation/repeat contexts preserve intake/history |
| 07 — Training | Plans, logs, attendance, practical/OJT and portfolio | Duration/content reconciliation |
| 08 — Completion | Assessment, retention and external references | Authority separation and preserved evidence |
| 09 — Operations | Fees, finance, inventory, files, tasks and reporting | Reconciliation, authorization and retry correctness |
| 10 — Acceptance | Schema/domain/security/API/browser tests, recovery and UAT | Current evidence; zero Critical/High blockers |

Keep the application demonstrable after every stage.

## 19. Required acceptance journeys

1. Regulatory Admin creates Principal; Principal creates institute; prohibited private access/mapping fails.
2. Academic publication/revision preserves historical versions and links.
3. Two institutes remain isolated, including under one entity.
4. Entity matching/change reveals no unrelated records.
5. Evidenced Unit → Shift → ITSU → instructor → planning Batch works.
6. Unverified planning displays no invented official seats.
7. All admission prerequisites enforce positive/negative cases.
8. Concurrent Batches sharing capacity cannot exceed it; retries remain idempotent.
9. Planning verification preserves original evidence; invalid later identity changes fail.
10. One-/two-year and six-month contexts preserve intake identity.
11. Repeat/resumption preserves prior evidence without duplicate credit.
12. Calendar amendment changes applicable future execution while preserving earlier decisions.
13. Delivery, partial attendance, substitution, cancellation, make-up and OJT reconcile.
14. Assessment versions and retention holds prevent invalid calculation/disposal.
15. External statuses require evidence; result imports/corrections preserve history.
16. Lifecycle releases seats only where permitted; transfers and financial effects remain controlled.
17. Later invalidation flags/restricts future actions without silent cancellation.
18. Fee review, payments, allocation, credits, refunds, reversals and cash closing reconcile.
19. Stock concurrency, document access and report totals remain correct.
20. Deactivation blocks sessions/queued delivery; succession preserves ownership history.
21. Imports/exports cannot bypass authorization or verification.
22. Unsafe migration, forged grants, cross-institute references and orphan links fail safely.
23. Unverified Batch cannot be offered as government-eligible.
24. Pending entity verification permits drafts, not operational readiness.
25. Capacity revision does not reset consumption; reductions block new intake without automatic cancellation.
26. Transfer preserves source ownership/history and restricts exchange.
27. Schedule revisions do not duplicate Academic Years; valid repeats use controlled occurrences.
28. Historical real payments can be recorded without certifying unreviewed fees.
29. Active holds block both manual disposal and cleanup jobs.
30. Restore preserves current revocation/holds and does not recreate capacity allowances.
31. Manual approval cannot bypass mandatory conditions.
32. Superseded references remain usable where applicable; incomplete/conflicting publication fails.
33. Incomplete administrative closure does not imply academic/official success.
34. Supporting records introduce no fourth Regulatory Admin module or prohibited duplicate master.

## 20. Definition of done and planning freeze

### 20.1 Specification freeze

This standalone version is **FROZEN FOR IMPLEMENTATION**.

The specification provides canonical ownership, responsible roles, lifecycles, source-backed unknown states, version/history handling and positive/negative/concurrent acceptance coverage.

No unresolved material internal contradiction or missing original functional domain has been identified in the completed comparison.

Freeze does not verify every current government source or institute’s status.

Concrete source configuration remains subject to applicable publications and actual evidence. Unknown government facts block dependent actions, not unrelated development or draft entry.

Physical schema, APIs, detailed permission matrices, screens, deployment recovery objectives, runbooks and test suites are implementation deliverables. They must conform to this baseline.

Newly discovered conflicts require recorded, controlled revision—not silent requirement changes.

### 20.2 Implementation/release gate

Authorized release requires:

- All agreed modules/workflows implemented.
- Proven role, membership, assignment and institute boundaries.
- Rules matching applicable sources and evidence.
- Passing integrity, transaction, concurrency and history checks.
- Passing current-revision backend and browser end-to-end tests.
- Realistic institute-staff UAT.
- Demonstrated file protection, revocation, audit and recovery.
- Approved measurable recovery objectives.
- Recorded acceptance evidence.
- Zero unresolved Critical or High blockers.

A frozen blueprint, demonstration or screenshot is not release proof.

## Regulatory reference inputs for implementation

These are source-maintenance inputs, not additional modules, upload requirements, government certifications or independently verified current legal conclusions.

- [DGT — Affiliation Norms for ITIs 2025](https://dgt.gov.in/en/node/3975)
- [DGT — CTS-2026 Training Calendar and revised annexures](https://dgt.gov.in/en/node/4394)
- [DGT — NIMS FAQ Version 4, 1 April 2026](https://dgt.gov.in/sites/default/files/2026-04/Annexure-III%20FAQ%20version4_01.04.2026_.pdf), with later applicable amendments
- [DGT — Affiliation/admission notices, extensions and CTS Calendars](https://dgt.gov.in/en/affiliation-admission), including distinct 2024/2025/2026 contexts
- [BharatSkills — CTS Curricula](https://bharatskills.gov.in/Home/CTS)
- [DGT — Examination and result notices](https://dgt.gov.in/en/exam-corner)
- [DGT — Normative Training Fee for Private ITIs](https://dgt.gov.in/en/node/1931), subject to current applicability/amendment review
- [Bihar DET — Institute, admission and trainee-data notices](https://det.bihar.gov.in/index.html)
- [CSTARI/DGT — Electrician CTS v3.0, August 2025](https://www.cstaricalcutta.gov.in/sites/default/files/2026-06/Electrician_CTS3.0_NSQF-4.pdf)

**Interpretation rule:** Before enforcing an official fact, quantity, qualification or date, identify the actual publication, amendments and evidence applicable to the institute, Trade, Unit, Shift, intake, Academic Year and Course Year. Keep external authority, local review and ERP permission distinct.