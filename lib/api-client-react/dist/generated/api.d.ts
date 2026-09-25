import type { QueryKey, UseMutationOptions, UseMutationResult, UseQueryOptions, UseQueryResult } from "@tanstack/react-query";
import type { Completion, CreateHabitBody, DashboardStats, Habit, HabitStreak, HealthStatus, ListCompletionsParams, ToggleCompletionBody, ToggleCompletionResponse, UpdateHabitBody, WeeklyActivity } from "./api.schemas";
import { customFetch } from "../custom-fetch";
import type { ErrorType, BodyType } from "../custom-fetch";
type AwaitedInput<T> = PromiseLike<T> | T;
type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;
type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];
/**
 * @summary Health check
 */
export declare const getHealthCheckUrl: () => string;
export declare const healthCheck: (options?: RequestInit) => Promise<HealthStatus>;
export declare const getHealthCheckQueryKey: () => readonly ["/api/healthz"];
export declare const getHealthCheckQueryOptions: <TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData> & {
    queryKey: QueryKey;
};
export type HealthCheckQueryResult = NonNullable<Awaited<ReturnType<typeof healthCheck>>>;
export type HealthCheckQueryError = ErrorType<unknown>;
/**
 * @summary Health check
 */
export declare function useHealthCheck<TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary List all habits
 */
export declare const getListHabitsUrl: () => string;
export declare const listHabits: (options?: RequestInit) => Promise<Habit[]>;
export declare const getListHabitsQueryKey: () => readonly ["/api/habits"];
export declare const getListHabitsQueryOptions: <TData = Awaited<ReturnType<typeof listHabits>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listHabits>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listHabits>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListHabitsQueryResult = NonNullable<Awaited<ReturnType<typeof listHabits>>>;
export type ListHabitsQueryError = ErrorType<unknown>;
/**
 * @summary List all habits
 */
export declare function useListHabits<TData = Awaited<ReturnType<typeof listHabits>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listHabits>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Create a new habit
 */
export declare const getCreateHabitUrl: () => string;
export declare const createHabit: (createHabitBody: CreateHabitBody, options?: RequestInit) => Promise<Habit>;
export declare const getCreateHabitMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createHabit>>, TError, {
        data: BodyType<CreateHabitBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createHabit>>, TError, {
    data: BodyType<CreateHabitBody>;
}, TContext>;
export type CreateHabitMutationResult = NonNullable<Awaited<ReturnType<typeof createHabit>>>;
export type CreateHabitMutationBody = BodyType<CreateHabitBody>;
export type CreateHabitMutationError = ErrorType<unknown>;
/**
 * @summary Create a new habit
 */
export declare const useCreateHabit: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createHabit>>, TError, {
        data: BodyType<CreateHabitBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createHabit>>, TError, {
    data: BodyType<CreateHabitBody>;
}, TContext>;
/**
 * @summary Get a single habit
 */
export declare const getGetHabitUrl: (id: number) => string;
export declare const getHabit: (id: number, options?: RequestInit) => Promise<Habit>;
export declare const getGetHabitQueryKey: (id: number) => readonly [`/api/habits/${number}`];
export declare const getGetHabitQueryOptions: <TData = Awaited<ReturnType<typeof getHabit>>, TError = ErrorType<void>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getHabit>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getHabit>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetHabitQueryResult = NonNullable<Awaited<ReturnType<typeof getHabit>>>;
export type GetHabitQueryError = ErrorType<void>;
/**
 * @summary Get a single habit
 */
export declare function useGetHabit<TData = Awaited<ReturnType<typeof getHabit>>, TError = ErrorType<void>>(id: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getHabit>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Update a habit
 */
export declare const getUpdateHabitUrl: (id: number) => string;
export declare const updateHabit: (id: number, updateHabitBody: UpdateHabitBody, options?: RequestInit) => Promise<Habit>;
export declare const getUpdateHabitMutationOptions: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateHabit>>, TError, {
        id: number;
        data: BodyType<UpdateHabitBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateHabit>>, TError, {
    id: number;
    data: BodyType<UpdateHabitBody>;
}, TContext>;
export type UpdateHabitMutationResult = NonNullable<Awaited<ReturnType<typeof updateHabit>>>;
export type UpdateHabitMutationBody = BodyType<UpdateHabitBody>;
export type UpdateHabitMutationError = ErrorType<void>;
/**
 * @summary Update a habit
 */
export declare const useUpdateHabit: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateHabit>>, TError, {
        id: number;
        data: BodyType<UpdateHabitBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateHabit>>, TError, {
    id: number;
    data: BodyType<UpdateHabitBody>;
}, TContext>;
/**
 * @summary Delete a habit
 */
export declare const getDeleteHabitUrl: (id: number) => string;
export declare const deleteHabit: (id: number, options?: RequestInit) => Promise<void>;
export declare const getDeleteHabitMutationOptions: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteHabit>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof deleteHabit>>, TError, {
    id: number;
}, TContext>;
export type DeleteHabitMutationResult = NonNullable<Awaited<ReturnType<typeof deleteHabit>>>;
export type DeleteHabitMutationError = ErrorType<void>;
/**
 * @summary Delete a habit
 */
export declare const useDeleteHabit: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteHabit>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof deleteHabit>>, TError, {
    id: number;
}, TContext>;
/**
 * @summary Toggle archive status of a habit
 */
export declare const getToggleArchiveHabitUrl: (id: number) => string;
export declare const toggleArchiveHabit: (id: number, options?: RequestInit) => Promise<Habit>;
export declare const getToggleArchiveHabitMutationOptions: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof toggleArchiveHabit>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof toggleArchiveHabit>>, TError, {
    id: number;
}, TContext>;
export type ToggleArchiveHabitMutationResult = NonNullable<Awaited<ReturnType<typeof toggleArchiveHabit>>>;
export type ToggleArchiveHabitMutationError = ErrorType<void>;
/**
 * @summary Toggle archive status of a habit
 */
export declare const useToggleArchiveHabit: <TError = ErrorType<void>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof toggleArchiveHabit>>, TError, {
        id: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof toggleArchiveHabit>>, TError, {
    id: number;
}, TContext>;
/**
 * @summary List completions for a date range
 */
export declare const getListCompletionsUrl: (params: ListCompletionsParams) => string;
export declare const listCompletions: (params: ListCompletionsParams, options?: RequestInit) => Promise<Completion[]>;
export declare const getListCompletionsQueryKey: (params?: ListCompletionsParams) => readonly ["/api/completions", ...ListCompletionsParams[]];
export declare const getListCompletionsQueryOptions: <TData = Awaited<ReturnType<typeof listCompletions>>, TError = ErrorType<unknown>>(params: ListCompletionsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listCompletions>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listCompletions>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListCompletionsQueryResult = NonNullable<Awaited<ReturnType<typeof listCompletions>>>;
export type ListCompletionsQueryError = ErrorType<unknown>;
/**
 * @summary List completions for a date range
 */
export declare function useListCompletions<TData = Awaited<ReturnType<typeof listCompletions>>, TError = ErrorType<unknown>>(params: ListCompletionsParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listCompletions>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Toggle a habit completion for a specific date
 */
export declare const getToggleCompletionUrl: () => string;
export declare const toggleCompletion: (toggleCompletionBody: ToggleCompletionBody, options?: RequestInit) => Promise<ToggleCompletionResponse>;
export declare const getToggleCompletionMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof toggleCompletion>>, TError, {
        data: BodyType<ToggleCompletionBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof toggleCompletion>>, TError, {
    data: BodyType<ToggleCompletionBody>;
}, TContext>;
export type ToggleCompletionMutationResult = NonNullable<Awaited<ReturnType<typeof toggleCompletion>>>;
export type ToggleCompletionMutationBody = BodyType<ToggleCompletionBody>;
export type ToggleCompletionMutationError = ErrorType<unknown>;
/**
 * @summary Toggle a habit completion for a specific date
 */
export declare const useToggleCompletion: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof toggleCompletion>>, TError, {
        data: BodyType<ToggleCompletionBody>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof toggleCompletion>>, TError, {
    data: BodyType<ToggleCompletionBody>;
}, TContext>;
/**
 * @summary Get dashboard summary stats
 */
export declare const getGetDashboardStatsUrl: () => string;
export declare const getDashboardStats: (options?: RequestInit) => Promise<DashboardStats>;
export declare const getGetDashboardStatsQueryKey: () => readonly ["/api/stats/dashboard"];
export declare const getGetDashboardStatsQueryOptions: <TData = Awaited<ReturnType<typeof getDashboardStats>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getDashboardStats>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getDashboardStats>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetDashboardStatsQueryResult = NonNullable<Awaited<ReturnType<typeof getDashboardStats>>>;
export type GetDashboardStatsQueryError = ErrorType<unknown>;
/**
 * @summary Get dashboard summary stats
 */
export declare function useGetDashboardStats<TData = Awaited<ReturnType<typeof getDashboardStats>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getDashboardStats>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get current and best streaks per habit
 */
export declare const getGetStreaksUrl: () => string;
export declare const getStreaks: (options?: RequestInit) => Promise<HabitStreak[]>;
export declare const getGetStreaksQueryKey: () => readonly ["/api/stats/streaks"];
export declare const getGetStreaksQueryOptions: <TData = Awaited<ReturnType<typeof getStreaks>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getStreaks>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getStreaks>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetStreaksQueryResult = NonNullable<Awaited<ReturnType<typeof getStreaks>>>;
export type GetStreaksQueryError = ErrorType<unknown>;
/**
 * @summary Get current and best streaks per habit
 */
export declare function useGetStreaks<TData = Awaited<ReturnType<typeof getStreaks>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getStreaks>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
/**
 * @summary Get completions grouped by day of week for the last 4 weeks
 */
export declare const getGetWeeklyActivityUrl: () => string;
export declare const getWeeklyActivity: (options?: RequestInit) => Promise<WeeklyActivity[]>;
export declare const getGetWeeklyActivityQueryKey: () => readonly ["/api/stats/weekly-activity"];
export declare const getGetWeeklyActivityQueryOptions: <TData = Awaited<ReturnType<typeof getWeeklyActivity>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getWeeklyActivity>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getWeeklyActivity>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetWeeklyActivityQueryResult = NonNullable<Awaited<ReturnType<typeof getWeeklyActivity>>>;
export type GetWeeklyActivityQueryError = ErrorType<unknown>;
/**
 * @summary Get completions grouped by day of week for the last 4 weeks
 */
export declare function useGetWeeklyActivity<TData = Awaited<ReturnType<typeof getWeeklyActivity>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getWeeklyActivity>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export {};
//# sourceMappingURL=api.d.ts.map