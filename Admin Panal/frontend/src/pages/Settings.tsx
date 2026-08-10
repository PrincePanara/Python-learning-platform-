import React, { useState } from 'react';
import { CopyIcon, KeyRoundIcon, PlusIcon } from 'lucide-react';
import { PageHeader } from '../components/layout/PageHeader';
import { Card, CardHeader } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { TextField, Toggle, Select } from '../components/ui/Field';
import { ErrorState } from '../components/ui/States';
import { TableShell, Th, Td, Tr, Thumb } from '../components/ui/Table';
import { cn } from '../utils/cn';
import { useScreenInit } from '../useScreenInit.js';

const groups: Array<{label: string;items: string[];}> = [
{ label: 'Workspace', items: ['General', 'Branding', 'Languages', 'Theme'] },
{ label: 'Platform', items: ['Authentication', 'Cloud storage', 'AI settings', 'Certificates', 'Payments'] },
{ label: 'Operations', items: ['Notifications', 'Backup', 'Security', 'API keys', 'Custom domain', 'SEO'] },
{ label: 'Access', items: ['Roles', 'Permissions'] }];


const roles = [
{ name: 'Super admin', people: 3, scope: 'Full access to every workspace surface', thumb: 'SA' },
{ name: 'Curriculum lead', people: 8, scope: 'Create and publish courses, modules, lessons', thumb: 'CL' },
{ name: 'Instructor', people: 42, scope: 'Edit own course content, grade assignments', thumb: 'IN' },
{ name: 'Support', people: 11, scope: 'View learners, reset progress, issue refunds', thumb: 'SU' }];


export function Settings() {
  const screenInit = useScreenInit();
  const [section, setSection] = useState(screenInit.section ?? 'General');
  const [platformName, setPlatformName] = useState('Atlas Learn');
  const [email, setEmail] = useState('admin@atlaslearn.io');
  const [domain, setDomain] = useState('learn.atlas.io');
  const [model, setModel] = useState('Balanced');

  return (
    <div className="space-y-6">
      <PageHeader
        title="Settings"
        description="Workspace configuration, integrations, security and access control."
        actions={<Button variant="primary" size="md">Save changes</Button>} />
      

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[220px_minmax(0,1fr)]">
        <nav aria-label="Settings sections" className="space-y-5">
          {groups.map((g) =>
          <div key={g.label}>
              <p className="px-2 pb-2 text-2xs font-semibold uppercase tracking-[0.08em] text-faint">{g.label}</p>
              <div className="space-y-0.5">
                {g.items.map((item) =>
              <button
                key={item}
                onClick={() => setSection(item)}
                aria-current={section === item ? 'page' : undefined}
                className={cn(
                  'w-full rounded-full px-3 py-2 text-left text-[13.5px] font-medium transition-colors duration-200',
                  section === item ? 'bg-surface text-ink shadow-soft' : 'text-muted hover:bg-surface/70 hover:text-ink'
                )}>
                
                    {item}
                  </button>
              )}
              </div>
            </div>
          )}
        </nav>

        <div className="space-y-4">
          {section === 'General' &&
          <>
              <Card className="rounded-3xl border border-line bg-surface shadow-soft">
                <CardHeader title="General" description="Core identity for the learning platform." />
                <div className="space-y-4 p-5 sm:p-6">
                  <TextField label="Platform name" value={platformName} onChange={setPlatformName} />
                  <TextField label="Support email" value={email} onChange={setEmail} type="email" />
                  <Select
                  label="Default language"
                  value="English (US)"
                  onChange={() => undefined}
                  options={['English (US)', 'Español', 'Deutsch', 'हिन्दी', 'Português']} />
                
                </div>
              </Card>
              <Card className="rounded-3xl border border-line bg-surface shadow-soft">
                <CardHeader title="Branding" description="Logo and visual identity across learner surfaces." />
                <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:p-6">
                  <Thumb label="AL" className="h-14 w-14 rounded-2xl text-[16px]" />
                  <div className="flex-1">
                    <p className="text-[13px] font-medium text-ink">Workspace logo</p>
                    <p className="mt-0.5 text-[12.5px] text-muted">SVG or PNG, at least 512×512px.</p>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm">Replace</Button>
                    <Button size="sm" variant="ghost">Remove</Button>
                  </div>
                </div>
              </Card>
            </>
          }

          {section === 'AI settings' &&
          <Card className="rounded-3xl border border-line bg-surface shadow-soft">
              <CardHeader title="AI settings" description="How the AI tutor and content generator behave." />
              <div className="space-y-4 p-5 sm:p-6">
                <Select
                label="Generation mode"
                value={model}
                onChange={setModel}
                options={['Balanced', 'Precise', 'Creative']} />
              
                <div className="divide-y divide-line rounded-2xl border border-line px-4">
                  <Toggle checked label="AI tutor for learners" description="24/7 conversational help inside lessons." onChange={() => undefined} />
                  <Toggle checked label="Auto-generate lesson summaries" description="Written after each lesson is published." onChange={() => undefined} />
                  <Toggle checked label="Human review before publish" description="AI content stays in review until approved." onChange={() => undefined} />
                  <Toggle checked={false} label="Auto-generate practice questions" description="Creates 10 questions per new lesson." onChange={() => undefined} />
                </div>
                <ErrorState
                title="Monthly AI budget at 78%"
                description="$3,120 of $4,000 used. Generation pauses automatically at 100%." />
              
              </div>
            </Card>
          }

          {section === 'API keys' &&
          <Card className="rounded-3xl border border-line bg-surface shadow-soft">
              <CardHeader
              title="API keys"
              description="Server-side keys for integrations. Rotate every 90 days."
              action={<Button size="sm" variant="primary"><PlusIcon className="h-3.5 w-3.5" />New key</Button>} />
            
              <div className="pt-4">
                <TableShell>
                  <thead>
                    <tr>
                      <Th>Name</Th>
                      <Th>Key</Th>
                      <Th>Created</Th>
                      <Th>Last used</Th>
                      <Th align="right">Actions</Th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                  ['Production server', 'sk_live_••••••4f21', 'Jan 12, 2026', '2 min ago'],
                  ['Mobile app', 'sk_live_••••••9c07', 'Mar 3, 2026', '1 hr ago'],
                  ['Analytics ETL', 'sk_live_••••••1b88', 'Jun 21, 2026', 'Yesterday']].
                  map(([name, key, created, used]) =>
                  <Tr key={name}>
                        <Td>
                          <span className="flex items-center gap-2 font-medium">
                            <KeyRoundIcon className="h-3.5 w-3.5 text-faint" />
                            {name}
                          </span>
                        </Td>
                        <Td className="font-mono text-[12.5px] text-muted">{key}</Td>
                        <Td className="text-muted">{created}</Td>
                        <Td className="text-muted">{used}</Td>
                        <Td align="right">
                          <span className="flex justify-end gap-1">
                            <Button size="sm" variant="ghost" aria-label={`Copy ${name} key`}>
                              <CopyIcon className="h-3.5 w-3.5" />
                            </Button>
                            <Button size="sm" variant="ghost">Revoke</Button>
                          </span>
                        </Td>
                      </Tr>
                  )}
                  </tbody>
                </TableShell>
              </div>
            </Card>
          }

          {section === 'Roles' &&
          <Card className="rounded-3xl border border-line bg-surface shadow-soft">
              <CardHeader
              title="Roles"
              description="Who can do what across the workspace."
              action={<Button size="sm" variant="primary"><PlusIcon className="h-3.5 w-3.5" />New role</Button>} />
            
              <ul className="divide-y divide-line px-5 sm:px-6">
                {roles.map((r) =>
              <li key={r.name} className="flex items-center gap-4 py-4">
                    <Thumb label={r.thumb} />
                    <div className="min-w-0 flex-1">
                      <p className="text-[13.5px] font-medium text-ink">{r.name}</p>
                      <p className="mt-0.5 truncate text-[12.5px] text-muted">{r.scope}</p>
                    </div>
                    <Badge>{r.people} people</Badge>
                    <Button size="sm" variant="ghost">Edit</Button>
                  </li>
              )}
              </ul>
            </Card>
          }

          {section === 'Custom domain' &&
          <Card className="rounded-3xl border border-line bg-surface shadow-soft">
              <CardHeader title="Custom domain" description="Serve the learner experience from your own domain." />
              <div className="space-y-4 p-5 sm:p-6">
                <TextField label="Domain" value={domain} onChange={setDomain} hint="Point a CNAME to cname.atlaslearn.io" />
                <div className="flex items-center gap-2 rounded-2xl border border-line bg-canvas/60 p-4">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  <p className="text-[13px] text-ink">SSL certificate active</p>
                  <span className="ml-auto text-2xs text-faint">Renews Nov 4, 2026</span>
                </div>
              </div>
            </Card>
          }

          {![
          'General',
          'AI settings',
          'API keys',
          'Roles',
          'Custom domain'].
          includes(section) &&
          <Card className="rounded-3xl border border-line bg-surface shadow-soft">
              <CardHeader title={section} description="Configure this area for your workspace." />
              <div className="divide-y divide-line px-5 pb-4 sm:px-6">
                <Toggle checked label={`Enable ${section.toLowerCase()}`} description="Applies to every course and learner in the workspace." onChange={() => undefined} />
                <Toggle checked={false} label="Notify admins on change" description="Send an email whenever this section is updated." onChange={() => undefined} />
                <Toggle checked label="Audit log" description="Record every change with actor and timestamp." onChange={() => undefined} />
              </div>
            </Card>
          }
        </div>
      </div>
    </div>);

}